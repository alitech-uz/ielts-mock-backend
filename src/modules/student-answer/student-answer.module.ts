import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentAnswerModel } from './schemas';
import { AuthModule } from '../auth/auth.module';
import { StudentAnswerService } from './services/student-answer.service';
import { StudentAnswerResolver } from './resolvers/student-answer.resolver';
import { StudentExamModule } from '../student-exam/student-exam.module';

@Module({
  imports: [
    MongooseModule.forFeature([StudentAnswerModel]),
    AuthModule,
    StudentExamModule,
  ],
  providers: [StudentAnswerService, StudentAnswerResolver],
  exports: [MongooseModule],
})
export class StudentAnswerModule {}
