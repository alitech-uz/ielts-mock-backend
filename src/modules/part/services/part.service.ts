import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Part } from '../schemas';
import { Model } from 'mongoose';
import { CreatePartInput, UpdatePartInput } from '../dto';

@Injectable()
export class PartService {
  constructor(@InjectModel(Part.name) private partModel: Model<Part>) {}

  async findAll() {
    return await this.partModel.find().exec();
  }

  async findOne(id: string) {
    return await this.partModel.findById(id).exec();
  }

  async create(input: CreatePartInput) {
    return await this.partModel.create(input);
  }

  async update(id: string, input: UpdatePartInput) {
    return await this.partModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string, authId: string) {
    const existingPart = await this.partModel
      .findByIdAndUpdate(
        id,
        { isDeleted: true, deletedBy: authId },
        { new: true },
      )
      .exec();
    return !!existingPart;
  }
}
