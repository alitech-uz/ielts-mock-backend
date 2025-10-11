import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { Configs } from './config';
import { AuthModule } from './modules/auth/auth.module';
import { StudentExamModule } from './modules/student-exam/student-exam.module';
import { CenterModule } from './modules/center/center.module';
import { ExamModule } from './modules/exam/exam.module';
import { ModuleModule } from './modules/module/module.module';
import { FileModule } from './modules/file/file.module';
import { PartModule } from './modules/part/part.module';
import { StudentAnswerModule } from './modules/student-answer/student-answer.module';

@Module({
  imports: [
    Configs,
    AuthModule,
    UserModule,
    StudentExamModule,
    StudentAnswerModule,
    CenterModule,
    ExamModule,
    PartModule,
    ModuleModule,
    FileModule,
  ],
})
export class AppModule {}
