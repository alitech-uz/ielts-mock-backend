import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Center extends Document {
  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  logo: string;

  @Prop({ type: Date, required: true })
  estabilishedAt: Date;
}

export const CenterSchema = SchemaFactory.createForClass(Center);

export const CenterModel: ModelDefinition = {
  name: Center.name,
  schema: CenterSchema,
};
