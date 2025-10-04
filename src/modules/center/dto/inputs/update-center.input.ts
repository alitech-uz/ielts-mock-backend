import { Field, InputType, PartialType, ID } from '@nestjs/graphql';
import { CreateCenterInput } from './create-center.input';

@InputType()
export class UpdateCenterInput extends PartialType(CreateCenterInput) {
  @Field(() => ID)
  _id: string;
}
