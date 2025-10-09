import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentExamInput {
  @Field()
  startedAt: Date;

  @Field()
  studentId: string;

  @Field()
  examId: string;
}
