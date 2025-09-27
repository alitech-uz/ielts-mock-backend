import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ListeningQuestionOutput } from './listening-question.output';

@ObjectType()
export class ListeningPartOutput {
  @Field(() => Int)
  partNumber: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  audio?: string;

  @Field({ nullable: true })
  sourceUrl?: string;

  @Field()
  transcript: string;

  @Field(() => [ListeningQuestionOutput])
  questions: ListeningQuestionOutput[];
}
