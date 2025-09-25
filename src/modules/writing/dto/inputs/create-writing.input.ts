import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class CreateWritingTaskInput {
  @Field(() => Int)
  taskNumber: number;

  @Field()
  title: string;

  @Field()
  instruction: string;

  @Field()
  questionType: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => Int)
  minWords: number;

  @Field(() => Int)
  points: number;

  @Field()
  sampleAnswer: string;
}

@InputType()
export class CreateWritingInput {
  @Field(() => [CreateWritingTaskInput])
  tasks: CreateWritingTaskInput[];

  @Field(() => ID)
  examId: string;
}
