import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { TASK } from 'src/common/constants/task.constant';

@Schema({ _id: false })
export class WritingTask {
  @Prop({ type: Number, required: true })
  taskNumber: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  instruction: string;

  @Prop({ type: String, enum: TASK, default: TASK.TEXT })
  questionType: string;

  @Prop({ type: String, default: null })
  image?: string;

  @Prop({ type: Number, required: true })
  minWords: number;

  @Prop({ type: Number, default: 0 })
  points: number;

  @Prop({ type: String, required: true })
  sampleAnswer: string;
}

export const WritingTaskSchema = SchemaFactory.createForClass(WritingTask);

@Schema({ timestamps: true })
export class Writing extends Document {
  @Prop({ type: [WritingTaskSchema], default: [] })
  tasks: WritingTask[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true })
  examId: string;
}

export const WritingSchema = SchemaFactory.createForClass(Writing);

export const WritingModel: ModelDefinition = {
  name: Writing.name,
  schema: WritingSchema,
};
