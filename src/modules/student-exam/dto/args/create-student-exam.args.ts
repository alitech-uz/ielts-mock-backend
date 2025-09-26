import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateStudentExamArgs {
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
