import { Field, ID } from '@nestjs/graphql';

export class StudentAnswerOutput {
  @Field(() => ID)
  _id: string;

  @Field()
  studentExamId: string;

  @Field()
  questionId: string;

  @Field()
  module: string;

  @Field()
  studentAnswer: string;

  @Field()
  correctAnswer: string;

  @Field()
  isCorrect: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
