import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Writing extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Number, required: true })
  duration: number;

  @Prop({ type: Date, default: false })
  deletedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: '' })
  deletedBy: string;
}

export const WritingSchema = SchemaFactory.createForClass(Writing);

export const WritingModel: ModelDefinition = {
  name: Writing.name,
  schema: WritingSchema,
};
