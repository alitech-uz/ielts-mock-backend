import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { WritingTask, WritingTaskSchema } from './writing-task.schema';

@Schema({ timestamps: true })
export class Writing extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Number, required: true })
  duration: number;

  @Prop({ type: [WritingTaskSchema], default: [] })
  tasks: WritingTask[];
}

export const WritingSchema = SchemaFactory.createForClass(Writing);

export const WritingModel: ModelDefinition = {
  name: Writing.name,
  schema: WritingSchema,
};
