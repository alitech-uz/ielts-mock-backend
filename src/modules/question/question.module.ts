import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModel } from './schemas';

@Module({
  imports: [MongooseModule.forFeature([QuestionModel])],
  exports: [MongooseModule],
})
export class QuestionModule {}
