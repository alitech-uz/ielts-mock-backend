import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Writing } from '../schemas/writing.schema';
import { Model } from 'mongoose';
import { UpdateWritingInput } from '../dto/inputs/update-writing.input';
import { CreateWritingInput } from '../dto';
import { FileService } from 'src/modules/file/services/file.service';

@Injectable()
export class WritingService {
  constructor(
    @InjectModel(Writing.name) private writingModel: Model<Writing>,
    private fileService: FileService,
  ) {}

  async findAll() {
    return await this.writingModel.find().exec();
  }

  async findOne(id: string) {
    return await this.writingModel.findById(id).exec();
  }

  async create(input: CreateWritingInput) {
    return await this.writingModel.create(input);
  }

  async update(id: string, input: UpdateWritingInput) {
    return await this.writingModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const existingWriting = await this.writingModel
      .findByIdAndDelete(id)
      .exec();

    if (existingWriting?.tasks.length) {
      await Promise.all([
        ...existingWriting.tasks
          .filter((t) => t.image)
          .map((t) => t.image && this.fileService.delete(t.image)),

        ...existingWriting.tasks
          .filter((t) => t.sourceUrl)
          .map((t) => t.sourceUrl && this.fileService.delete(t.sourceUrl)),
      ]);
    }
    return !!existingWriting;
  }
}
