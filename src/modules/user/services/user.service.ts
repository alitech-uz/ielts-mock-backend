import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { UpdateUserInput } from '../dto/inputs/update-user.input';
import { CreateUserInput } from '../dto';
import { HashService } from 'src/common/services/hash.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private hashService: HashService,
  ) {}

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async create(input: CreateUserInput) {
    input.password = await this.hashService.hash(input.password);

    // if (input.centerId) {
    // }

    return await this.userModel.create(input);
  }

  async update(id: string, input: UpdateUserInput) {
    return await this.userModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
