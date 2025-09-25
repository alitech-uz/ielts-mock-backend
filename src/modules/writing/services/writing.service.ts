import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Writing } from '../schemas/writing.schema';
import { Model } from 'mongoose';
import { UpdateWritingInput } from '../dto/inputs/update-writing.input';
import { CreateWritingInput } from '../dto';

@Injectable()
export class WritingService {
  constructor(
    @InjectModel(Writing.name) private writingModel: Model<Writing>,
  ) {}

  async findAll() {
    return await this.writingModel.find().exec();
  }

  async findOne(id: string) {
    return await this.writingModel.findById(id).exec();
  }

  async create(input: CreateWritingInput) {
    return await this.writingModel.create(input);
  }

  async update(id: string, input: UpdateWritingInput) {
    return await this.writingModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.writingModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
