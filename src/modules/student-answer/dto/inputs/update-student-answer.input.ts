import { InputType, Field, ID, PartialType, Int } from '@nestjs/graphql';
import { CreateStudentAnswerInput } from './create-student-answer.input';

@InputType()
export class UpdateStudentAnswerInput extends PartialType(
  CreateStudentAnswerInput,
) {
  @Field(() => ID)
  _id: string;

  @Field(() => Int, { nullable: true })
  writingScore: number;

  @Field(() => Int, { nullable: true })
  readingScore: number;

  @Field(() => Int, { nullable: true })
  listeningScore: number;

  @Field(() => Int, { nullable: true })
  speakingScore: number;
}
