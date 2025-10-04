import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateWritingTaskInput {
  @Field(() => Int)
  part: number;

  @Field()
  title: string;

  @Field()
  instruction: string;

  @Field()
  topic: string;

  @Field(() => Int)
  wordCount: number;

  @Field(() => Int)
  timeLimit: number;

  @Field()
  sampleAnswer: string;

  @Field(() => [String], { defaultValue: [] })
  files: string[];
}
