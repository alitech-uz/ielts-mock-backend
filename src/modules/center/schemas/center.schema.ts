import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Center extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  login: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  centerId: string;
}

export const CenterSchema = SchemaFactory.createForClass(Center);

export const CenterModel: ModelDefinition = {
  name: Center.name,
  schema: CenterSchema,
};
