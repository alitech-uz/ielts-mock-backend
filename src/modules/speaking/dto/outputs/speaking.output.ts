import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SpeakingPartOutput } from '.';

@ObjectType()
export class SpeakingOutput {
  @Field(() => [SpeakingPartOutput])
  parts: SpeakingPartOutput[];

  @Field(() => ID)
  examId: string;
}
