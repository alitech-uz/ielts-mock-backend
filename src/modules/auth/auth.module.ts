import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from '../user/schemas/user.schema';
import { AuthService } from './services/auth.service';
import { AuthResolver } from './resolvers/auth.resolver';
import { HashService } from 'src/common/services/hash.service';
import { JwtService } from 'src/common/services/jwt.service';
import { JwtGuard } from 'src/common/guards';

@Module({
  imports: [MongooseModule.forFeature([UserModel])],
  providers: [AuthService, AuthResolver, HashService, JwtService, JwtGuard],
  exports: [AuthService, JwtService, JwtGuard],
})
export class AuthModule {}
