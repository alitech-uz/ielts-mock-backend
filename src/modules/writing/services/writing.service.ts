import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Writing } from '../schemas/writing.schema';
import { Model, Types } from 'mongoose';
import { UpdateWritingInput } from '../dto/inputs/update-writing.input';
import { CreateWritingInput } from '../dto';

@Injectable()
export class WritingService {
  constructor(
    @InjectModel(Writing.name) private writingModel: Model<Writing>,
  ) {}

  async findAll() {
    return await this.writingModel
      .aggregate([
        {
          $match: {
            isDeleted: false,
          },
        },
        {
          $lookup: {
            from: 'parts',
            localField: '_id',
            foreignField: 'moduleId',
            as: 'parts',
            pipeline: [
              {
                $match: {
                  isDeleted: false,
                },
              },
            ],
          },
        },
      ])
      .exec();
  }

  async findOne(id: string) {
    const [writing] = await this.writingModel
      .aggregate([
        {
          $match: {
            _id: new Types.ObjectId(id),
            isDeleted: false,
          },
        },
        {
          $lookup: {
            from: 'parts',
            localField: '_id',
            foreignField: 'moduleId',
            as: 'parts',
            pipeline: [
              {
                $match: {
                  isDeleted: false,
                },
              },
            ],
          },
        },
      ])
      .exec();

    if (!writing) {
      throw new NotFoundException('Not found writing');
    }

    return writing;
  }

  async create(input: CreateWritingInput) {
    return await this.writingModel.create(input);
  }

  async update(id: string, input: UpdateWritingInput) {
    return await this.writingModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string, authId) {
    const existingWriting = await this.writingModel
      .findByIdAndUpdate(
        id,
        { isDeleted: true, deletedBy: authId },
        { new: true },
      )
      .exec();
    return !!existingWriting;
  }
}
