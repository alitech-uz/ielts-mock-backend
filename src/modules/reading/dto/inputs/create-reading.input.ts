import { InputType, Field, ID } from '@nestjs/graphql';
import { CreateReadingPassageInput } from './create-reading-passage.input';

@InputType()
export class CreateReadingInput {
  @Field(() => [CreateReadingPassageInput])
  passages: CreateReadingPassageInput[];

  @Field(() => ID)
  examId: string;
}
