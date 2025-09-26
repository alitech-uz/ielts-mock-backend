import { ArgsType, Field } from '@nestjs/graphql';
import { CreateSpeakingPartInput } from '../inputs';

@ArgsType()
export class CreateSpeakingArgs {
  @Field(() => [CreateSpeakingPartInput])
  parts: CreateSpeakingPartInput[];
}
