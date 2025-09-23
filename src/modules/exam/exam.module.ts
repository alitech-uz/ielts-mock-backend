import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamModel } from './schemas/exam.schema';
import { ExamService } from './services/exam.service';
import { ExamResolver } from './resolvers/exam.resolver';
import { AuthModule } from '../auth/auth.module';
import { CenterModule } from '../center/center.module';

@Module({
  imports: [MongooseModule.forFeature([ExamModel]), AuthModule, CenterModule],
  providers: [ExamService, ExamResolver],
  exports: [ExamService, MongooseModule],
})
export class ExamModule {}
