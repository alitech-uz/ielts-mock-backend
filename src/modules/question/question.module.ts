import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModel } from './schemas';
import { QuestionResolver } from './resolvers/question.resolver';
import { QuestionService } from './services/question.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([QuestionModel]), AuthModule],
  providers: [QuestionResolver, QuestionService],
  exports: [MongooseModule],
})
export class QuestionModule {}
