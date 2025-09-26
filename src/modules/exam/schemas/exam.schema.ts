import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Exam extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Date, required: true })
  completedAt: Date;

  @Prop({ type: Date, required: true })
  startedAt: Date;

  @Prop({ type: Boolean, required: true, default: false })
  isCompleted: boolean;

  @Prop({ type: Boolean, required: true, default: true })
  isActive: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Center', required: true })
  centerId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Writing', default: null })
  writingId?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Reading', default: null })
  readingId?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listening',
    default: null,
  })
  listeningId?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speaking',
    default: null,
  })
  speakingId?: string;
}

export const ExamSchema = SchemaFactory.createForClass(Exam);

export const ExamModel: ModelDefinition = {
  name: Exam.name,
  schema: ExamSchema,
};
