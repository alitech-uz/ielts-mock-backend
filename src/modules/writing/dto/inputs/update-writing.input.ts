import { Field, InputType, PartialType, ID } from '@nestjs/graphql';
import { CreateWritingInput } from './create-writing.input';

@InputType()
export class UpdateWritingInput extends PartialType(CreateWritingInput) {
  @Field(() => ID)
  _id: string;
}
