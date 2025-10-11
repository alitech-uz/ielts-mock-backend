import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Exam } from '../schemas/exam.schema';
import { Model } from 'mongoose';
import { UpdateExamInput } from '../dto/inputs/update-exam.input';
import { CreateExamInput } from '../dto';
import { Center } from 'src/modules/center/schemas/center.schema';
import { Module } from 'src/modules/module/schemas';

@Injectable()
export class ExamService {
  constructor(
    @InjectModel(Exam.name) private examModel: Model<Exam>,
    @InjectModel(Center.name) private centerModel: Model<Center>,
    @InjectModel(Module.name) private ModuleModel: Model<Module>,
  ) {}

  async findAll() {
    return await this.examModel.find().exec();
  }

  async findOne(id: string) {
    return await this.examModel.findById(id).exec();
  }

  async create(input: CreateExamInput) {
    const foundCenter = await this.centerModel.findById(input.centerId);
    if (!foundCenter) {
      throw new NotFoundException('Not found center');
    }

    if (input.moduleId) {
      const foundModule = await this.ModuleModel.findById(input.moduleId);
      if (!foundModule) {
        throw new NotFoundException('Not found Module');
      }
    }

    return await this.examModel.create(input);
  }

  async update(id: string, input: UpdateExamInput) {
    return await this.examModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.examModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
