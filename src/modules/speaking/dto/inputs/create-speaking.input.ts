import { InputType, Field, ID } from '@nestjs/graphql';
import { CreateSpeakingPartInput } from './create-speaking-part.input';

@InputType()
export class CreateSpeakingInput {
  @Field(() => [CreateSpeakingPartInput])
  parts: CreateSpeakingPartInput[];

  @Field(() => ID)
  examId: string;
}
