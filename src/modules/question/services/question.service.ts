import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from '../schemas';
import { Model } from 'mongoose';
import { CreateQuestionInput, UpdateQuestionInput } from '../dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  async findAll() {
    return await this.questionModel
      .find({ deletedAt: { $exists: false } })
      .exec();
  }

  async findOne(id: string) {
    return await this.questionModel
      .findOne({ _id: id, deletedAt: { $exists: false } })
      .exec();
  }

  async create(input: CreateQuestionInput) {
    return await this.questionModel.create(input);
  }

  async update(input: UpdateQuestionInput) {
    return await this.questionModel
      .findByIdAndUpdate(input._id, input, { new: true })
      .exec();
  }

  async remove(id: string, authId: string) {
    const existingQuestion = await this.questionModel
      .findByIdAndUpdate(
        id,
        { deletedAt: new Date(), deletedBy: authId },
        { new: true },
      )
      .exec();
    return !!existingQuestion;
  }
}
