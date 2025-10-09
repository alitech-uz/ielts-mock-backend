import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { QUESTION_TYPE } from 'src/common/constants/question-type';
import { Option } from './option.schema';

@Schema({ timestamps: true })
export class Question {
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  partId: string;

  @Prop({ type: String, required: true })
  question: string;

  @Prop({ type: String, enum: QUESTION_TYPE, required: true })
  type: string;

  @Prop({ type: Number })
  placementNumber?: number;

  @Prop({ type: [Option], default: [] })
  options?: Option[];

  @Prop({ type: Date, default: false })
  deletedAt: Date;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

export const QuestionModel: ModelDefinition = {
  name: Question.name,
  schema: QuestionSchema,
};
