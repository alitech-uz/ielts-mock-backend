import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadingModel } from './schemas';
import { ReadingService } from './services/reading.service';
import { ReadingResolver } from './resolvers/reading.resolver';
import { AuthModule } from '../auth/auth.module';
import { FileService } from '../file/services/file.service';

@Module({
  imports: [MongooseModule.forFeature([ReadingModel]), AuthModule],
  providers: [ReadingService, ReadingResolver, FileService],
  exports: [ReadingService, MongooseModule],
})
export class ReadingModule {}
