import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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

  @Prop({ type: String, required: true })
  sampleAnswer: string;

  @Prop({ type: Number, default: 0 })
  points: number;
}

export const WritingTaskSchema = SchemaFactory.createForClass(WritingTask);
