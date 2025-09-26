import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ReadingPassage, ReadingPassageSchema } from './reading-passage.schema';

@Schema({ timestamps: true })
export class Reading extends Document {
  @Prop({ type: [ReadingPassageSchema], default: [] })
  passages: ReadingPassage[];
}

export const ReadingSchema = SchemaFactory.createForClass(Reading);

export const ReadingModel: ModelDefinition = {
  name: Reading.name,
  schema: ReadingSchema,
};
