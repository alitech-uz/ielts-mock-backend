import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Center } from '../schemas/center.schema';
import { Model } from 'mongoose';
import { UpdateCenterInput } from '../dto/inputs/update-center.input';
import { CreateCenterInput } from '../dto';

@Injectable()
export class CenterService {
  constructor(@InjectModel(Center.name) private centerModel: Model<Center>) {}

  async findAll() {
    return await this.centerModel.find().exec();
  }

  async findOne(id: string) {
    return await this.centerModel.findById(id).exec();
  }

  async create(input: CreateCenterInput) {
    return await this.centerModel.create(input);
  }

  async update(id: string, input: UpdateCenterInput) {
    return await this.centerModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.centerModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
