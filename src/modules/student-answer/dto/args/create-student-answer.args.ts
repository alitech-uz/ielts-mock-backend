import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateStudentAnswerArgs {
  @Field()
  questionId: string;

  @Field()
  answer: string;
}
