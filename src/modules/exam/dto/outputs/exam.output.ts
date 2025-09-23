import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExamOutput {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  completedAt: Date;

  @Field()
  startedAt: Date;

  @Field()
  isCompleted: boolean;

  @Field()
  isActive: boolean;

  @Field()
  centerId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
