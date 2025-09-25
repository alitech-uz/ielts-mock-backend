import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ReadingQuestionOutput } from './reading-question.output';

@ObjectType()
export class ReadingPassageOutput {
  @Field(() => Int)
  passageNumber: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field(() => [ReadingQuestionOutput])
  questions: ReadingQuestionOutput[];
}
