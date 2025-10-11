import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OptionOutput } from './option.output';

@ObjectType()
export class QuestionOutput {
  @Field()
  partId: string;

  @Field()
  question: string;

  @Field()
  type: string;

  @Field(() => Int, { nullable: true })
  placementNumber?: number;

  @Field(() => [OptionOutput], { nullable: true })
  options?: OptionOutput[];
}
