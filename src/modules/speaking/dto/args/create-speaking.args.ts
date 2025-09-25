import { ArgsType, Field, ID } from '@nestjs/graphql';
import { CreateSpeakingPartInput } from '../inputs';

@ArgsType()
export class CreateSpeakingArgs {
  @Field(() => [CreateSpeakingPartInput])
  parts: CreateSpeakingPartInput[];

  @Field(() => ID)
  examId: string;
}
