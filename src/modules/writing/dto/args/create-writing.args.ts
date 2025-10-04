import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CreateWritingTaskInput } from '../inputs';

@ArgsType()
export class CreateWritingArgs {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  duration: number;

  @Field(() => [CreateWritingTaskInput])
  tasks: CreateWritingTaskInput[];
}
