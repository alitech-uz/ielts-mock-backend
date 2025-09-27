import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class StudentExam extends Document {
  @Prop({ type: Date, required: true })
  completedAt: Date;

  @Prop({ type: Date, required: true })
  startedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true })
  examId: string;

  @Prop({ type: Boolean, required: true, default: false })
  isCompleted: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  studentId: string;
}

export const StudentExamSchema = SchemaFactory.createForClass(StudentExam);

export const StudentExamModel: ModelDefinition = {
  name: StudentExam.name,
  schema: StudentExamSchema,
};
