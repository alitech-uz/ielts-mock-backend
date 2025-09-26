import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WritingModel } from './schemas';
import { WritingService } from './services/writing.service';
import { WritingResolver } from './resolvers/writing.resolver';
import { AuthModule } from '../auth/auth.module';
import { FileService } from '../file/services/file.service';

@Module({
  imports: [MongooseModule.forFeature([WritingModel]), AuthModule],
  providers: [WritingService, WritingResolver, FileService],
  exports: [WritingService, MongooseModule],
})
export class WritingModule {}
