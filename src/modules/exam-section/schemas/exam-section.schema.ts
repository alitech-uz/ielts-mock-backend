import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ExamSection extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, default: null })
  audio: string;

  @Prop({ type: String, default: null })
  sourceFile: string;

  @Prop({ type: String, required: true })
  sourceUrl: string;

  @Prop({ type: String, required: true })
  questions: string;

  @Prop({ type: String, default: '' })
  answers: string;

  @Prop({ type: String, required: true, default: true })
  sectionType: string;
}

export const ExamSectionSchema = SchemaFactory.createForClass(ExamSection);

export const ExamSectionModel: ModelDefinition = {
  name: ExamSection.name,
  schema: ExamSectionSchema,
};
