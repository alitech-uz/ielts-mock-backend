import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  SpeakingQuestion,
  SpeakingQuestionSchema,
} from './speaking-question.schema';

@Schema({ _id: false })
export class SpeakingPart {
  @Prop({ type: Number, required: true })
  partNumber: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, default: null })
  sourceUrl?: string;

  @Prop({ type: [SpeakingQuestionSchema], default: [] })
  questions: SpeakingQuestion[];
}

export const SpeakingPartSchema = SchemaFactory.createForClass(SpeakingPart);
