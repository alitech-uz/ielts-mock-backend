import { Field, InputType, PartialType, ID } from '@nestjs/graphql';
import { CreateListeningInput } from './create-listening.input';

@InputType()
export class UpdateListeningInput extends PartialType(CreateListeningInput) {
  @Field(() => ID)
  _id: string;
}
