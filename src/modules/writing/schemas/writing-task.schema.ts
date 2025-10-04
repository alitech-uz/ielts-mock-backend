import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class WritingTask {
  @Prop({ type: Number, required: true })
  part: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  instruction: string;

  @Prop({ type: String, required: true })
  topic: string;

  @Prop({ type: Number, required: true })
  wordCount: number;

  @Prop({ type: Number, required: true })
  timeLimit: number;

  @Prop({ type: String, required: true })
  sampleAnswer: string;

  @Prop({ type: [String], default: [] })
  files: string[];
}

export const WritingTaskSchema = SchemaFactory.createForClass(WritingTask);
