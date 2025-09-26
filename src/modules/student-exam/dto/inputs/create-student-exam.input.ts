import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentExamInput {
  @Field()
  comletedAt: Date;

  @Field()
  startedAt: Date;

  @Field()
  examId: string;

  @Field()
  isCompleted: boolean;

  @Field()
  studentId: string;
}
