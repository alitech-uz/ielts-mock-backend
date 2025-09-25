import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Speaking } from '../schemas';
import { UpdateSpeakingInput } from '../dto/inputs/update-speaking.input';
import { CreateSpeakingInput } from '../dto';

@Injectable()
export class SpeakingService {
  constructor(
    @InjectModel(Speaking.name) private speakingModel: Model<Speaking>,
  ) {}

  async findAll() {
    return await this.speakingModel.find().exec();
  }

  async findOne(id: string) {
    return await this.speakingModel.findById(id).exec();
  }

  async create(input: CreateSpeakingInput) {
    return await this.speakingModel.create(input);
  }

  async update(id: string, input: UpdateSpeakingInput) {
    return await this.speakingModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.speakingModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
