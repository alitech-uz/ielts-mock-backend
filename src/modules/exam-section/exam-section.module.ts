import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamSectionModel } from './schemas/exam-section.schema';
import { ExamSectionService } from './services/exam-section.service';
import { ExamSectionResolver } from './resolvers/exam-section.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([ExamSectionModel]), AuthModule],
  providers: [ExamSectionService, ExamSectionResolver],
  exports: [ExamSectionService, MongooseModule],
})
export class ExamSectionModule {}
