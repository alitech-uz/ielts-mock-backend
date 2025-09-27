import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateSpeakingQuestionInput } from './create-speaking-question.input';

@InputType()
export class CreateSpeakingPartInput {
  @Field(() => Int)
  partNumber: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  sourceUrl?: string;

  @Field(() => [CreateSpeakingQuestionInput])
  questions: CreateSpeakingQuestionInput[];
}
