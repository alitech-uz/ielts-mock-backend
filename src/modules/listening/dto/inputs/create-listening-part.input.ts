import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateListeningQuestionInput } from './create-listening-question.input';

@InputType()
export class CreateListeningPartInput {
  @Field(() => Int)
  partNumber: number;

  @Field()
  title: string;

  @Field()
  transcript: string;

  @Field(() => [CreateListeningQuestionInput])
  questions: CreateListeningQuestionInput[];
}
