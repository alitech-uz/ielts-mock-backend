import { ObjectType, Field, Int } from '@nestjs/graphql';
import { QuestionOutput } from 'src/modules/question/dto';

@ObjectType()
export class PartOutput {
  @Field(() => Int)
  partNumber: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  topic?: string;

  @Field(() => Int, { nullable: true })
  wordCount?: number;

  @Field(() => Int, { nullable: true })
  timeLimit?: number;

  @Field({ nullable: true })
  sampleAnswer?: string;

  @Field({ nullable: true })
  audio?: string;

  @Field({ nullable: true })
  file?: string;

  @Field(() => [QuestionOutput], { nullable: true })
  questions?: QuestionOutput[];
}
