import { InputType, Field } from '@nestjs/graphql';
import { CreateReadingPassageInput } from './create-reading-passage.input';

@InputType()
export class CreateReadingInput {
  @Field(() => [CreateReadingPassageInput])
  passages: CreateReadingPassageInput[];
}
