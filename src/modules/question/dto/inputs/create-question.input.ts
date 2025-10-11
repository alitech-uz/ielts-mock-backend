import { InputType, Field, Int, ID } from '@nestjs/graphql';
import { CreateOptionInput } from './create-option.input';

@InputType()
export class CreateQuestionInput {
  @Field(() => ID)
  partId: string;

  @Field()
  question: string;

  @Field()
  type: string;

  @Field(() => Int, { nullable: true })
  placementNumber?: number;

  @Field(() => [CreateOptionInput])
  options: CreateOptionInput[];
}
