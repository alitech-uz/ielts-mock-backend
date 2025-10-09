import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateOptionInput } from './create-option.input';

@InputType()
export class CreateQuestionInput {
  @Field()
  question: string;

  @Field()
  type: string;

  @Field(() => Int, { nullable: true })
  placementNumber?: number;

  @Field(() => [CreateOptionInput])
  options: CreateOptionInput[];
}
