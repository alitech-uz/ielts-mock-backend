import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class WritingTask {
  @Prop({ type: Number, required: true })
  taskNumber: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  instruction: string;

  @Prop({ type: String, default: null })
  sourceUrl?: string;

  @Prop({ type: String, default: null })
  image?: string;

  @Prop({ type: Number, required: true })
  minWords: number;

  @Prop({ type: String, required: true })
  sampleAnswer: string;
}

export const WritingTaskSchema = SchemaFactory.createForClass(WritingTask);
