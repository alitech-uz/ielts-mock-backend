import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class ListeningQuestion {
  @Prop({ type: String, required: true })
  question: string;

  @Prop({ type: [String], required: true })
  options: string[];

  @Prop({ type: String, required: true })
  correctAnswer: string;

  @Prop({ type: Number, default: 1 })
  points: number;
}

export const ListeningQuestionSchema =
  SchemaFactory.createForClass(ListeningQuestion);
