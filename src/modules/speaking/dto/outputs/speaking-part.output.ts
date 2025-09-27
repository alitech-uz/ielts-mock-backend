import { Field, ObjectType, Int } from '@nestjs/graphql';
import { SpeakingQuestionOutput } from './speaking-question.output';

@ObjectType()
export class SpeakingPartOutput {
  @Field(() => Int)
  partNumber: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  sourceUrl?: string;

  @Field(() => [SpeakingQuestionOutput])
  questions: SpeakingQuestionOutput[];
}
