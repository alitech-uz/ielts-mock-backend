import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateListeningQuestionInput } from './create-listening-question.input';

@InputType()
export class CreateListeningPartInput {
  @Field(() => Int)
  partNumber: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  audio?: string;

  @Field({ nullable: true })
  sourceUrl?: string;

  @Field()
  transcript: string;

  @Field(() => [CreateListeningQuestionInput])
  questions: CreateListeningQuestionInput[];
}
