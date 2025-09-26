import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class WritingTaskOutput {
  @Field(() => Int)
  taskNumber: number;

  @Field()
  title: string;

  @Field()
  instruction: string;

  @Field({ nullable: true })
  fileUrl?: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => Int)
  minWords: number;

  @Field()
  sampleAnswer: string;
}

@ObjectType()
export class WritingOutput {
  @Field(() => [WritingTaskOutput])
  tasks: WritingTaskOutput[];
}
