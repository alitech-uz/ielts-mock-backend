import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { Configs } from './config';
import { AuthModule } from './modules/auth/auth.module';
import { StudentExamModule } from './modules/student-exam/student-exam.module';
import { CenterModule } from './modules/center/center.module';
import { ExamModule } from './modules/exam/exam.module';
import { WritingModule } from './modules/writing/writing.module';

@Module({
  imports: [
    Configs,
    AuthModule,
    UserModule,
    StudentExamModule,
    CenterModule,
    ExamModule,
    WritingModule,
  ],
})
export class AppModule {}
