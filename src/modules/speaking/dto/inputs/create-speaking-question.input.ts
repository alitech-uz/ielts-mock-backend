import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSpeakingQuestionInput {
  @Field()
  question: string;

  @Field(() => [String], { nullable: true })
  hints?: string[];

  @Field({ nullable: true })
  sampleAnswer?: string;
}
