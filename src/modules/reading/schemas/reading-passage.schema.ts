import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  ReadingQuestion,
  ReadingQuestionSchema,
} from './reading-question.schema';

@Schema({ _id: false })
export class ReadingPassage {
  @Prop({ type: Number, required: true })
  passageNumber: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: [ReadingQuestionSchema], default: [] })
  questions: ReadingQuestion;
}

export const ReadingPassageSchema =
  SchemaFactory.createForClass(ReadingPassage);
