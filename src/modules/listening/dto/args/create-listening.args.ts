import { ArgsType, Field, ID } from '@nestjs/graphql';
import { CreateListeningPartInput } from '../inputs';

@ArgsType()
export class CreateListeningArgs {
  @Field(() => [CreateListeningPartInput])
  parts: CreateListeningPartInput[];
}
