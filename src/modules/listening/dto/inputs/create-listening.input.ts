import { InputType, Field } from '@nestjs/graphql';
import { CreateListeningPartInput } from './create-listening-part.input';

@InputType()
export class CreateListeningInput {
  @Field(() => [CreateListeningPartInput])
  parts: CreateListeningPartInput[];
}
