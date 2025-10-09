import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Part {
  @Prop({ type: Number, required: true })
  partNumber: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String })
  topic?: string;

  @Prop({ type: Number })
  wordCount?: number;

  @Prop({ type: Number })
  timeLimit?: number;

  @Prop({ type: String })
  sampleAnswer?: string;

  @Prop({ type: String })
  audio?: string;

  @Prop({ type: String })
  file?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  moduleId: string;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users', default: null })
  deletedBy: string;
}

export const PartSchema = SchemaFactory.createForClass(Part);

export const PartModel: ModelDefinition = {
  name: Part.name,
  schema: PartSchema,
};
