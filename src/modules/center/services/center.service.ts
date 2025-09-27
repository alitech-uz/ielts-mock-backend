import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Center } from '../schemas/center.schema';
import { Model } from 'mongoose';
import { UpdateCenterInput } from '../dto/inputs/update-center.input';
import { CreateCenterInput } from '../dto';
import { FileService } from 'src/modules/file/services/file.service';

@Injectable()
export class CenterService {
  constructor(
    @InjectModel(Center.name) private centerModel: Model<Center>,
    private fileService: FileService,
  ) {}

  async findAll() {
    return await this.centerModel.find().exec();
  }

  async findOne(id: string) {
    return await this.centerModel.findById(id).exec();
  }

  async create(input: CreateCenterInput) {
    return await this.centerModel.create(input);
  }

  async update(id: string, input: UpdateCenterInput) {
    const existingCenter = await this.centerModel.findById(id);
    if (!existingCenter) {
      throw new NotFoundException('Not found center');
    }

    if (input.logo) {
      await this.fileService.delete(existingCenter.logo);
    }

    return await this.centerModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const existingCenter = await this.centerModel.findByIdAndDelete(id).exec();

    if (existingCenter?.logo) {
      await this.fileService.delete(existingCenter.logo);
    }

    return !!existingCenter;
  }
}
