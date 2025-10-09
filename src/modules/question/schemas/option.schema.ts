import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Option {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Boolean, required: true })
  isCorrectAnswer: boolean;

  @Prop({ type: String })
  key?: string;
}

export const OptionSchema = SchemaFactory.createForClass(Option);
