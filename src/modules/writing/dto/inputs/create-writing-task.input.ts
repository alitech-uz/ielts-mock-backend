import { InputType, Field, Int } from '@nestjs/graphql';

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
