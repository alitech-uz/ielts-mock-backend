import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  ListeningQuestion,
  ListeningQuestionSchema,
} from './listening-question.schema';

@Schema({ _id: false })
export class ListeningPart {
  @Prop({ type: Number, required: true })
  partNumber: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, default: null })
  audio?: string;

  @Prop({ type: String, required: true })
  transcript: string;

  @Prop({ type: [ListeningQuestionSchema], default: [] })
  questions: ListeningQuestion[];
}

export const ListeningPartSchema = SchemaFactory.createForClass(ListeningPart);
