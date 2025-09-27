import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ListeningQuestionOutput {
  @Field()
  question: string;

  @Field(() => [String])
  options: string[];

  @Field()
  correctAnswer: string;
}
