import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateSpeakingInput } from './create-speaking.input';

@InputType()
export class UpdateSpeakingInput extends PartialType(CreateSpeakingInput) {
  @Field()
  id: string;
}
