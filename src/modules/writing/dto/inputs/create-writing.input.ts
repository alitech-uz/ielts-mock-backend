import { InputType, Field } from '@nestjs/graphql';
import { CreateWritingTaskInput } from './create-writing-task.input';

@InputType()
export class CreateWritingInput {
  @Field(() => [CreateWritingTaskInput])
  tasks: CreateWritingTaskInput[];
}
