import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class StudentExam extends Document {
  @Prop({ type: Date, required: true })
  startedAt: Date;

  @Prop({ type: Date, required: true })
  completedAt: Date;

  @Prop({ type: Boolean, required: true, default: false })
  isCompleted: boolean;

  @Prop({ type: Number, default: 0 })
  writingScore?: number;

  @Prop({ type: Number, default: 0 })
  readingScore?: number;

  @Prop({ type: Number, default: 0 })
  listeningScore?: number;

  @Prop({ type: Number, default: 0 })
  speakingScore?: number;

  @Prop({ type: Number, default: 0 })
  totalScore?: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  studentId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true })
  examId: string;
}

export const StudentExamSchema = SchemaFactory.createForClass(StudentExam);

export const StudentExamModel: ModelDefinition = {
  name: StudentExam.name,
  schema: StudentExamSchema,
};
