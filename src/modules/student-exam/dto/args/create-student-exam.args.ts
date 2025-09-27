import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateStudentExamArgs {
  @Field()
  completedAt: Date;

  @Field()
  startedAt: Date;

  @Field()
  examId: string;

  @Field()
  isCompleted: boolean;

  @Field()
  studentId: string;
}
