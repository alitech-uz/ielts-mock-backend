import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { Configs } from './config';
import { AuthModule } from './modules/auth/auth.module';
import { StudentExamModule } from './modules/student-exam/student-exam.module';
import { CenterModule } from './modules/center/center.module';

@Module({
  imports: [Configs, AuthModule, UserModule, StudentExamModule, CenterModule],
})
export class AppModule {}
