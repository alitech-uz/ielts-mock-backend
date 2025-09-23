import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class StudentExam extends Document {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  comletedAt: Date;

  @Prop({ required: true })
  startedAt: Date;

  @Prop({ required: true })
  examId: string;

  @Prop({ required: true })
  isCompleted: boolean;

  @Prop({ required: true })
  studentId: string;
}

export const StudentExamSchema = SchemaFactory.createForClass(StudentExam);

export const StudentExamModel: ModelDefinition = {
  name: StudentExam.name,
  schema: StudentExamSchema,
};
