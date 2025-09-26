import { InputType, Field, ID } from '@nestjs/graphql';
import { CreateWritingTaskInput } from './create-writing-task.input';

@InputType()
export class CreateWritingInput {
  @Field(() => [CreateWritingTaskInput])
  tasks: CreateWritingTaskInput[];
}
