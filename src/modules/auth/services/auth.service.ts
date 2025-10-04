import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashService } from 'src/common/services/hash.service';
import { JwtService } from 'src/common/services/jwt.service';
import { User } from 'src/modules/user/schemas/user.schema';
import { LoginAuthInput } from '../dto/inputs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}

  async login(input: LoginAuthInput) {
    const existingUser = await this.userModel.findOne({ phone: input.phone });
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await this.hashService.compare(
      input.password,
      existingUser.password,
    );
    if (!isMatch) {
      throw new BadRequestException('Password is incorrect');
    }

    const token = await this.jwtService.sign(
      {
        id: existingUser._id,
        role: existingUser.role,
      },
      input.rememberMe ? '7d' : '24h',
    );

    return { existingUser, token };
  }
}
