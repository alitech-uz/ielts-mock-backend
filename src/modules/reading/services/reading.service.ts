import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reading } from '../schemas';
import { UpdateReadingInput } from '../dto/inputs/update-reading.input';
import { CreateReadingInput } from '../dto';

@Injectable()
export class ReadingService {
  constructor(
    @InjectModel(Reading.name) private readingModel: Model<Reading>,
  ) {}

  async findAll() {
    return await this.readingModel.find().exec();
  }

  async findOne(id: string) {
    return await this.readingModel.findById(id).exec();
  }

  async create(input: CreateReadingInput) {
    return await this.readingModel.create(input);
  }

  async update(id: string, input: UpdateReadingInput) {
    return await this.readingModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const existingReading = await this.readingModel
      .findByIdAndDelete(id)
      .exec();
    return !!existingReading;
  }
}
