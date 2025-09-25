import { InputType, Field, ID } from '@nestjs/graphql';
import { CreateListeningPartInput } from './create-listening-part.input';

@InputType()
export class CreateListeningInput {
  @Field(() => [CreateListeningPartInput])
  parts: CreateListeningPartInput[];

  @Field(() => ID)
  examId: string;
}
