import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateModuleInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  duration: number;

  @Field()
  type: string;
}
