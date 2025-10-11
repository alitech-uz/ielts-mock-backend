import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Part } from '../schemas';
import { Model } from 'mongoose';
import { CreatePartInput, UpdatePartInput } from '../dto';

@Injectable()
export class PartService {
  constructor(@InjectModel(Part.name) private partModel: Model<Part>) {}

  async findAll() {
    return await this.partModel.find({ deletedAt: { $exists: false } }).exec();
  }

  async findOne(id: string) {
    return await this.partModel
      .findOne({ _id: id, deletedAt: { $exists: false } })
      .exec();
  }

  async create(input: CreatePartInput) {
    return await this.partModel.create(input);
  }

  async update(input: UpdatePartInput) {
    return await this.partModel
      .findByIdAndUpdate(input._id, input, { new: true })
      .exec();
  }

  async remove(id: string, authId: string) {
    const existingPart = await this.partModel
      .findByIdAndUpdate(
        id,
        { deletedAt: new Date(), deletedBy: authId },
        { new: true },
      )
      .exec();
    return !!existingPart;
  }
}
