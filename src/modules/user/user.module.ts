import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './schemas/user.schema';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';
import { AuthModule } from '../auth/auth.module';
import { HashService } from 'src/common/services/hash.service';
import { CenterModule } from '../center/center.module';

@Module({
  imports: [MongooseModule.forFeature([UserModel]), AuthModule, CenterModule],
  providers: [UserService, UserResolver, HashService],
  exports: [UserService, MongooseModule],
})
export class UserModule {}
