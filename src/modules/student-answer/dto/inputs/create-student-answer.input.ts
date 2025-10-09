import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentAnswerWritingInput {
  @Field()
  questionId: string;

  @Field()
  answer: string;
}
