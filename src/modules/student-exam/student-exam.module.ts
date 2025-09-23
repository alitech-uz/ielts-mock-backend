import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentExamModel } from './schemas/student-exam.schema';
import { StudentExamService } from './services/student-exam.service';
import { StudentExamResolver } from './resolvers/student-exam.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([StudentExamModel]), AuthModule],
  providers: [StudentExamService, StudentExamResolver],
  exports: [StudentExamService],
})
export class StudentExamModule {}
