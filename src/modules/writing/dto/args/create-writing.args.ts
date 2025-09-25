import { ArgsType, Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateWritingTaskArgs {
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

@ArgsType()
export class CreateWritingArgs {
  @Field(() => [CreateWritingTaskArgs])
  tasks: CreateWritingTaskArgs[];

  @Field(() => ID)
  examId: string;
}
