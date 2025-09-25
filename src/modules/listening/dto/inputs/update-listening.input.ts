import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateListeningInput } from './create-listening.input';

@InputType()
export class UpdateListeningInput extends PartialType(CreateListeningInput) {
  @Field()
  id: string;
}
