import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentExamInput {
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
}
