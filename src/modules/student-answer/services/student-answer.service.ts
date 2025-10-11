import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentAnswerInput } from '../dto';
import { StudentAnswer } from '../schemas';
import { UpdateStudentAnswerInput } from '../dto/inputs/update-student-answer.input';
import { StudentExam } from 'src/modules/student-exam/schemas/student-exam.schema';

@Injectable()
export class StudentAnswerService {
  constructor(
    @InjectModel(StudentAnswer.name)
    private studentAnswerModel: Model<StudentAnswer>,
    @InjectModel(StudentExam.name)
    private studentExamModel: Model<StudentExam>,
  ) {}

  async findAll() {
    return await this.studentAnswerModel
      .find({ deletedAt: { $exists: false } })
      .exec();
  }

  async findOne(id: string) {
    return await this.studentAnswerModel
      .findOne({ _id: id, deletedAt: { $exists: false } })
      .exec();
  }

  async create(input: CreateStudentAnswerInput) {
    return await this.studentAnswerModel.create(input);
  }

  async update(input: UpdateStudentAnswerInput, authId: string) {
    const { _id, ...inputData } = input;

    const existingStudentAnswer = await this.studentAnswerModel
      .findByIdAndUpdate(
        _id,
        {
          checkedBy: authId,
          checkedAt: new Date(),
          ...inputData,
        },
        { new: true },
      )
      .exec();

    await this.studentExamModel
      .findOneAndUpdate(
        { examId: existingStudentAnswer?.examId },
        {
          checkedBy: authId,
          checkedAt: new Date(),
          ...inputData,
        },
        { new: true },
      )
      .exec();

    return existingStudentAnswer;
  }

  async remove(id: string, authId: string) {
    const existingPart = await this.studentAnswerModel
      .findByIdAndUpdate(
        id,
        { deletedAt: new Date(), deletedBy: authId },
        { new: true },
      )
      .exec();
    return !!existingPart;
  }
}
