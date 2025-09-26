import { ArgsType, Field, ID } from '@nestjs/graphql';
import { CreateWritingTaskInput } from '../inputs';

@ArgsType()
export class CreateWritingArgs {
  @Field(() => [CreateWritingTaskInput])
  tasks: CreateWritingTaskInput[];
}
