import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ROLES } from 'src/common/constants';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true })
  login: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({
    type: String,
    default: ROLES.STUDENT,
    enum: [ROLES.ADMIN, ROLES.STUDENT],
  })
  role: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Center', default: null })
  centerId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserModel: ModelDefinition = {
  name: User.name,
  schema: UserSchema,
};
