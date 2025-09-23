import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CenterModel } from './schemas/center.schema';
import { CenterService } from './services/center.service';
import { CenterResolver } from './resolvers/center.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([CenterModel]), AuthModule],
  providers: [CenterService, CenterResolver],
  exports: [CenterService, MongooseModule],
})
export class CenterModule {}
