import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { MODULES } from 'src/common/constants/module.constant';

@Schema({ timestamps: true })
export class Module extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Number, required: true })
  duration: number;

  @Prop({ type: Date })
  deletedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  deletedBy: string;

  @Prop({ type: String, enum: MODULES, required: true })
  type: string;
}

export const ModuleSchema = SchemaFactory.createForClass(Module);

export const ModuleModel: ModelDefinition = {
  name: Module.name,
  schema: ModuleSchema,
};
