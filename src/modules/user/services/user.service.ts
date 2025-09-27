import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { UpdateUserInput } from '../dto/inputs/update-user.input';
import { CreateUserInput } from '../dto';
import { HashService } from 'src/common/services/hash.service';
import { Center } from 'src/modules/center/schemas/center.schema';
import { ROLES } from 'src/common/constants';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Center.name) private centerModel: Model<Center>,
    private hashService: HashService,
  ) {}

  async findAll() {
    return await this.userModel
      .find({ role: { $ne: ROLES.SUPER_ADMIN } })
      .select('-password')
      .exec();
  }

  async findOne(id: string) {
    return await this.userModel
      .findOne({ _id: id, role: { $ne: ROLES.SUPER_ADMIN } })
      .select('-password')
      .exec();
  }

  async onModuleInit() {
    const existingUser = await this.userModel.findOne({
      role: ROLES.SUPER_ADMIN,
    });
    if (!existingUser) {
      const hashedPassword = await this.hashService.hash('12345678');

      await this.userModel.create({
        firstName: 'Shoxruh',
        lastName: 'Toshmuhamedov',
        password: hashedPassword,
        login: '+998909007174',
        role: ROLES.SUPER_ADMIN,
      });
    }
  }
  async create(input: CreateUserInput) {
    const foundUser = await this.userModel.findOne({ login: input.login });
    if (foundUser) {
      throw new BadRequestException('User already exists');
    }

    input.password = await this.hashService.hash(input.password);

    if (input.centerId) {
      const foundCenter = await this.centerModel.findById(input.centerId);
      if (!foundCenter) {
        throw new NotFoundException('Not found center');
      }
    }

    return await this.userModel.create(input);
  }

  async update(id: string, input: UpdateUserInput) {
    return await this.userModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async remove(id: string) {
    const result = await this.userModel
      .findByIdAndDelete({ _id: id, role: { $ne: ROLES.SUPER_ADMIN } })
      .exec();
    return !!result;
  }
}
