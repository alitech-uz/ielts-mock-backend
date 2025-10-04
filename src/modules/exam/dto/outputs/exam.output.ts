import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExamOutput {
  @Field(() => ID)
  _id: string;

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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
