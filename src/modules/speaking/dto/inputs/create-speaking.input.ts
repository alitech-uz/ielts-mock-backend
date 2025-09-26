import { InputType, Field } from '@nestjs/graphql';
import { CreateSpeakingPartInput } from './create-speaking-part.input';

@InputType()
export class CreateSpeakingInput {
  @Field(() => [CreateSpeakingPartInput])
  parts: CreateSpeakingPartInput[];
}
