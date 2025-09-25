import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ListeningQuestionOutput {
  @Field()
  question: string;

  @Field(() => [String])
  options: string[];

  @Field()
  correctAnswer: string;

  @Field(() => Int, { defaultValue: 1 })
  points: number;
}
