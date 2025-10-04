import { Field, InputType, PartialType, ID } from '@nestjs/graphql';
import { CreateStudentExamInput } from './create-student-exam.input';

@InputType()
export class UpdateStudentExamInput extends PartialType(
  CreateStudentExamInput,
) {
  @Field(() => ID)
  _id: string;
}
