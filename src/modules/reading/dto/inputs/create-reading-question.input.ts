import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReadingQuestionInput {
  @Field()
  question: string;

  @Field(() => [String])
  options: string[];

  @Field()
  correctAnswer: string;
}
