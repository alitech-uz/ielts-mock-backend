import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class SpeakingQuestion {
  @Prop({ type: String, required: true })
  question: string;

  @Prop({ type: [String], default: [] })
  hints: string[];

  @Prop({ type: String, default: null })
  sampleAnswer?: string;
}

export const SpeakingQuestionSchema =
  SchemaFactory.createForClass(SpeakingQuestion);
