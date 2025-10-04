import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateWritingTaskInput } from './create-writing-task.input';

@InputType()
export class CreateWritingInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  duration: number;

  @Field(() => [CreateWritingTaskInput])
  tasks: CreateWritingTaskInput[];
}
