import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateExamArgs {
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
