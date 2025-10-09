import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentAnswerInput {
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
}
