import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateReadingQuestionInput } from './create-reading-question.input';

@InputType()
export class CreateReadingPassageInput {
  @Field(() => Int)
  passageNumber: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  sourceUrl?: string;

  @Field(() => [CreateReadingQuestionInput])
  questions: CreateReadingQuestionInput[];
}
