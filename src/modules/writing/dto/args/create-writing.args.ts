import { ArgsType, Field } from '@nestjs/graphql';
import { CreateWritingTaskInput } from '../inputs';

@ArgsType()
export class CreateWritingArgs {
  @Field(() => [CreateWritingTaskInput])
  tasks: CreateWritingTaskInput[];
}
