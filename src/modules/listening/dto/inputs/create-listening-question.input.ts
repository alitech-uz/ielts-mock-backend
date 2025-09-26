import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateListeningQuestionInput {
  @Field()
  question: string;

  @Field(() => [String])
  options: string[];

  @Field()
  correctAnswer: string;
}
