import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StudentExam } from '../schemas/student-exam.schema';
import { Model } from 'mongoose';
import { UpdateStudentExamInput } from '../dto/inputs/update-student-exam.input';
import { CreateStudentExamInput } from '../dto';
import { User } from 'src/modules/user/schemas/user.schema';
import { Exam } from 'src/modules/exam/schemas/exam.schema';
import { ROLES } from 'src/common/constants';

@Injectable()
export class StudentExamService {
  constructor(
    @InjectModel(StudentExam.name) private studentExamModel: Model<StudentExam>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Exam.name) private examModel: Model<Exam>,
  ) {}

  async findAll() {
    return await this.studentExamModel.find().exec();
  }

  async findOne(id: string) {
    return await this.studentExamModel.findById(id).exec();
  }

  async create(input: CreateStudentExamInput) {
    const foundUser = await this.userModel.findById(input.studentId);
    if (!foundUser) {
      throw new NotFoundException('Not found student');
    }

    if (foundUser.role !== ROLES.STUDENT) {
      throw new BadRequestException(
        'Only students are allowed to perform this action',
      );
    }

    const foundExam = await this.examModel.findById(input.examId);
    if (!foundExam) {
      throw new NotFoundException('Not found exam');
    }
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
