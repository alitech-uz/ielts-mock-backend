import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateReadingQuestionInput {
  @Field()
  question: string;

  @Field(() => [String])
  options: string[];

  @Field()
  correctAnswer: string;

  @Field(() => Int, { defaultValue: 1 })
  points: number;
}
