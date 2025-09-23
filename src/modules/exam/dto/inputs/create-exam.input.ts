import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExamInput {
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
}
