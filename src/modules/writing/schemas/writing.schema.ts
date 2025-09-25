import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { WritingTask, WritingTaskSchema } from './writing-task.schema';

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
