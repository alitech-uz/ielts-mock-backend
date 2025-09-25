import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ListeningPart, ListeningPartSchema } from './listening-part.schema';

@Schema({ timestamps: true })
export class Listening extends Document {
  @Prop({ type: [ListeningPartSchema], default: [] })
  parts: ListeningPart[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true })
  examId: string;
}

export const ListeningSchema = SchemaFactory.createForClass(Listening);

export const ListeningModel: ModelDefinition = {
  name: Listening.name,
  schema: ListeningSchema,
};
