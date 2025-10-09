import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MODULES } from 'src/common/constants/module.constant';

@Schema({ timestamps: true })
export class StudentAnswer extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentExam',
    required: true,
  })
  studentExamId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  questionId: string;

  @Prop({ type: String, enum: MODULES })
  module: string;

  @Prop()
  studentAnswer: any;

  @Prop()
  correctAnswer: any;

  @Prop({ type: Boolean, default: false })
  isCorrect: any;
}

export const StudentAnswerSchema = SchemaFactory.createForClass(StudentAnswer);

export const StudentAnswerModel: ModelDefinition = {
  name: StudentAnswer.name,
  schema: StudentAnswerSchema,
};
