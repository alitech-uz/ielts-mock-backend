import { Field, InputType } from '@nestjs/graphql';
import { CreateStudentAnswerWritingInput } from './create-student-answer.input';

@InputType()
export class SubmitStudentAnswerInput {
  @Field()
  studentExamId: string;

  @Field(() => [CreateStudentAnswerWritingInput])
  answer: CreateStudentAnswerWritingInput[];
}
