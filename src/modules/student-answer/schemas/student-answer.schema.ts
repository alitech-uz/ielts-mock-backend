import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class StudentAnswer extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
  })
  examId: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    default: null,
  })
  questionId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Part', required: true })
  partId: string;

  @Prop()
  studentAnswer: string;

  @Prop()
  correctAnswer: string;

  @Prop({ type: Boolean })
  isCorrect: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
  checkedBy: string;

  @Prop({ type: Date })
  checkedAt: Date;

  @Prop({ type: Date })
  deletedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
  deletedBy: string;
}

export const StudentAnswerSchema = SchemaFactory.createForClass(StudentAnswer);

export const StudentAnswerModel: ModelDefinition = {
  name: StudentAnswer.name,
  schema: StudentAnswerSchema,
};
