import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StudentExam } from '../schemas/student-exam.schema';
import { Model } from 'mongoose';
import { UpdateStudentExamInput } from '../dto/inputs/update-student-exam.input';
import { CreateStudentExamInput } from '../dto';

@Injectable()
export class StudentExamService {
  constructor(
    @InjectModel(StudentExam.name) private studentExamModel: Model<StudentExam>,
  ) {}

  async findAll() {
    return await this.studentExamModel.find().exec();
  }

  async findOne(id: string) {
    return await this.studentExamModel.findById(id).exec();
  }

  async create(input: CreateStudentExamInput) {
    return await this.studentExamModel.create(input);
  }

  async update(id: string, input: UpdateStudentExamInput) {
    return await this.studentExamModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.studentExamModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
