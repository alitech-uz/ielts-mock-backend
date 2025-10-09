import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateWritingInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  duration: number;
}
