import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ListeningQuestionOutput } from './listening-question.output';

@ObjectType()
export class ListeningPartOutput {
  @Field(() => Int)
  partNumber: number;

  @Field()
  title: string;

  @Field()
  transcript: string;

  @Field(() => [ListeningQuestionOutput])
  questions: ListeningQuestionOutput[];
}
