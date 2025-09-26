import { ObjectType, Field } from '@nestjs/graphql';
import { SpeakingPartOutput } from '.';

@ObjectType()
export class SpeakingOutput {
  @Field(() => [SpeakingPartOutput])
  parts: SpeakingPartOutput[];
}
