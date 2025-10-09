import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentAnswerOutput {
  @Field(() => ID)
  _id: string;

  @Field()
  examId: string;

  @Field({ nullable: true })
  questionId?: string;

  @Field()
  partId: string;

  @Field()
  studentAnswer: string;

  @Field({ nullable: true })
  correctAnswer?: string;

  @Field({ nullable: true })
  isCorrect?: string;

  @Field({ nullable: true })
  checkedAt: Date;

  @Field({ nullable: true })
  checkedBy: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
