import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SpeakingPart, SpeakingPartSchema } from './speaking-part.schema';

@Schema({ timestamps: true })
export class Speaking extends Document {
  @Prop({ type: [SpeakingPartSchema], default: [] })
  parts: SpeakingPart[];
}

export const SpeakingSchema = SchemaFactory.createForClass(Speaking);

export const SpeakingModel: ModelDefinition = {
  name: Speaking.name,
  schema: SpeakingSchema,
};
