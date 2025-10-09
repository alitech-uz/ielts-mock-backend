import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreatePartInput } from './create-part.input';

@InputType()
export class UpdatePartInput extends PartialType(CreatePartInput) {
  @Field(() => ID)
  _id: string;
}
