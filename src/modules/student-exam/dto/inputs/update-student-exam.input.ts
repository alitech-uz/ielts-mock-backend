import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateStudentExamInput } from './create-student-exam.input';

@InputType()
export class UpdateStudentExamInput extends PartialType(
  CreateStudentExamInput,
) {
  @Field()
  id: string;
}
