import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Module } from '../schemas/module.schema';
import { Model, Types } from 'mongoose';
import { UpdateModuleInput } from '../dto/inputs/update-module.input';
import { CreateModuleInput } from '../dto';

@Injectable()
export class ModuleService {
  constructor(@InjectModel(Module.name) private moduleModel: Model<Module>) {}

  async findAll() {
    return await this.moduleModel
      .aggregate([
        {
          $match: {
            deletedAt: { $exists: false },
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
                  deletedAt: { $exists: false },
                },
              },
            ],
          },
        },
      ])
      .exec();
  }

  async findOne(id: string) {
    const [Module] = await this.moduleModel
      .aggregate([
        {
          $match: {
            _id: new Types.ObjectId(id),
            deletedAt: { $exists: false },
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
                  deletedAt: { $exists: false },
                },
              },
            ],
          },
        },
      ])
      .exec();

    if (!Module) {
      throw new NotFoundException('Not found Module');
    }

    return Module;
  }

  async create(input: CreateModuleInput) {
    return await this.moduleModel.create(input);
  }

  async update(input: UpdateModuleInput) {
    return await this.moduleModel
      .findByIdAndUpdate(input._id, input, { new: true })
      .exec();
  }

  async remove(id: string, authId) {
    const existingModule = await this.moduleModel
      .findByIdAndUpdate(
        id,
        { deletedAt: new Date(), deletedBy: authId },
        { new: true },
      )
      .exec();
    return !!existingModule;
  }
}
