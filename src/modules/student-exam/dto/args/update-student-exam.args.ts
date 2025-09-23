import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateStudentExamArgs } from './create-student-exam.args';

@ArgsType()
export class UpdateStudentExamArgs extends PartialType(CreateStudentExamArgs) {
  @Field(() => ID)
  id: string;
}
