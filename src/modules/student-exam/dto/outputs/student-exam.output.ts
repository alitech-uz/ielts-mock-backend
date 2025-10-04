import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentExamOutput {
  @Field(() => ID)
  _id: string;

  @Field()
  startedAt: Date;

  @Field()
  completedAt: Date;

  @Field()
  isCompleted: boolean;

  @Field({ nullable: true })
  writingScore?: number;

  @Field({ nullable: true })
  readingScore?: number;

  @Field({ nullable: true })
  listeningScore?: number;

  @Field({ nullable: true })
  speakingScore?: number;

  @Field({ nullable: true })
  totalScore?: number;

  @Field()
  studentId: string;

  @Field()
  examId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
