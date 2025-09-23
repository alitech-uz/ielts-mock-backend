import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CenterModel } from './schemas/center.schema';
import { CenterService } from './services/center.service';
import { CenterResolver } from './resolvers/center.resolver';
import { AuthModule } from '../auth/auth.module';
import { HashService } from 'src/common/services/hash.service';

@Module({
  imports: [MongooseModule.forFeature([CenterModel]), AuthModule],
  providers: [CenterService, CenterResolver, HashService],
  exports: [CenterService],
})
export class CenterModule {}
