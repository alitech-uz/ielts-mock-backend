import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Listening } from '../schemas';
import { UpdateListeningInput } from '../dto/inputs/update-listening.input';
import { CreateListeningInput } from '../dto';

@Injectable()
export class ListeningService {
  constructor(
    @InjectModel(Listening.name) private listeningModel: Model<Listening>,
  ) {}

  async findAll() {
    return await this.listeningModel.find().exec();
  }

  async findOne(id: string) {
    return await this.listeningModel.findById(id).exec();
  }

  async create(input: CreateListeningInput) {
    return await this.listeningModel.create(input);
  }

  async update(id: string, input: UpdateListeningInput) {
    return await this.listeningModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.listeningModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
