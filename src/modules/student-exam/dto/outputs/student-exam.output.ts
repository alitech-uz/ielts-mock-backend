import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentExamOutput {
  @Field(() => ID)
  id: string;

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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
