import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamModel } from './schemas/exam.schema';
import { ExamService } from './services/exam.service';
import { ExamResolver } from './resolvers/exam.resolver';
import { AuthModule } from '../auth/auth.module';
import { CenterModule } from '../center/center.module';
import { WritingModule } from '../writing/writing.module';
import { ReadingModule } from '../reading/reading.module';
import { ListeningModule } from '../listening/listening.module';
import { SpeakingModule } from '../speaking/speaking.module';

@Module({
  imports: [
    MongooseModule.forFeature([ExamModel]),
    AuthModule,
    CenterModule,
    WritingModule,
    ReadingModule,
    ListeningModule,
    SpeakingModule,
  ],
  providers: [ExamService, ExamResolver],
  exports: [ExamService, MongooseModule],
})
export class ExamModule {}
