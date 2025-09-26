import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Exam } from '../schemas/exam.schema';
import { Model } from 'mongoose';
import { UpdateExamInput } from '../dto/inputs/update-exam.input';
import { CreateExamInput } from '../dto';
import { Center } from 'src/modules/center/schemas/center.schema';
import { Writing } from 'src/modules/writing/schemas';
import { Reading } from 'src/modules/reading/schemas';
import { Listening } from 'src/modules/listening/schemas';
import { Speaking } from 'src/modules/speaking/schemas';

@Injectable()
export class ExamService {
  constructor(
    @InjectModel(Exam.name) private examModel: Model<Exam>,
    @InjectModel(Center.name) private centerModel: Model<Center>,
    @InjectModel(Writing.name) private writingModel: Model<Writing>,
    @InjectModel(Reading.name) private readingModel: Model<Reading>,
    @InjectModel(Listening.name) private listeningModel: Model<Listening>,
    @InjectModel(Speaking.name) private spekingModel: Model<Speaking>,
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

    if (input.writingId) {
      const foundWriting = await this.writingModel.findById(input.writingId);
      if (!foundWriting) {
        throw new NotFoundException('Not found writing');
      }
    }

    if (input.readingId) {
      const foundReading = await this.readingModel.findById(input.readingId);
      if (!foundReading) {
        throw new NotFoundException('Not found reading');
      }
    }

    if (input.listeningId) {
      const foundListening = await this.listeningModel.findById(
        input.listeningId,
      );
      if (!foundListening) {
        throw new NotFoundException('Not found listening');
      }
    }

    if (input.speakingId) {
      const foundSpeaking = await this.spekingModel.findById(input.speakingId);
      if (!foundSpeaking) {
        throw new NotFoundException('Not found speaking');
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
