import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ReadingQuestionOutput {
  @Field()
  question: string;

  @Field(() => [String])
  options: string[];

  @Field()
  correctAnswer: string;
}
