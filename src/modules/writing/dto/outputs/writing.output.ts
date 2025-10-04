import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class WritingTaskOutput {
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

  @Field(() => [String])
  files: string[];
}

@ObjectType()
export class WritingOutput {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  duration: number;

  @Field(() => [WritingTaskOutput])
  tasks: WritingTaskOutput[];
}
