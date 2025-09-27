import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SpeakingQuestionOutput {
  @Field()
  question: string;

  @Field(() => [String], { nullable: true })
  hints?: string[];

  @Field({ nullable: true })
  sampleAnswer?: string;
}
