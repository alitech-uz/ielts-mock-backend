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

  @Field({ nullable: true })
  writingId?: string;

  @Field({ nullable: true })
  readingId?: string;

  @Field({ nullable: true })
  listeningId?: string;

  @Field({ nullable: true })
  speakingId?: string;
}
