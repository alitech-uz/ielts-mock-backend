import { Field, InputType, PartialType, ID } from '@nestjs/graphql';
import { CreateStudentExamInput } from './create-student-exam.input';

@InputType()
export class UpdateStudentExamInput extends PartialType(
  CreateStudentExamInput,
) {
  @Field(() => ID)
  _id: string;

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
}
