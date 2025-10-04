import { Field, InputType, PartialType, ID } from '@nestjs/graphql';
import { CreateSpeakingInput } from './create-speaking.input';

@InputType()
export class UpdateSpeakingInput extends PartialType(CreateSpeakingInput) {
  @Field(() => ID)
  _id: string;
}
