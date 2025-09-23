import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ExamSection } from '../schemas/exam-section.schema';
import { Model } from 'mongoose';
import { UpdateExamSectionInput } from '../dto/inputs/update-exam-section.input';
import { CreateExamSectionInput } from '../dto';

@Injectable()
export class ExamSectionService {
  constructor(
    @InjectModel(ExamSection.name) private examSectionModel: Model<ExamSection>,
  ) {}

  async findAll() {
    return await this.examSectionModel.find().exec();
  }

  async findOne(id: string) {
    return await this.examSectionModel.findById(id).exec();
  }

  async create(input: CreateExamSectionInput) {
    return await this.examSectionModel.create(input);
  }

  async update(id: string, input: UpdateExamSectionInput) {
    return await this.examSectionModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.examSectionModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
