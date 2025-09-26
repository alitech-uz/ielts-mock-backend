import { ArgsType, Field, ID } from '@nestjs/graphql';
import { CreateReadingPassageInput } from '../inputs';

@ArgsType()
export class CreateReadingArgs {
  @Field(() => [CreateReadingPassageInput])
  passages: CreateReadingPassageInput[];
}
