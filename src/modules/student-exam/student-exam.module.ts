import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentExamModel } from './schemas/student-exam.schema';
import { StudentExamService } from './services/student-exam.service';
import { StudentExamResolver } from './resolvers/student-exam.resolver';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ExamModule } from '../exam/exam.module';

@Module({
  imports: [
    MongooseModule.forFeature([StudentExamModel]),
    AuthModule,
    UserModule,
    ExamModule,
  ],
  providers: [StudentExamService, StudentExamResolver],
  exports: [StudentExamService, MongooseModule],
})
export class StudentExamModule {}
