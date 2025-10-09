import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOptionInput {
  @Field()
  title: string;

  @Field()
  isCorrectAnswer: boolean;

  @Field({ nullable: true })
  key?: string;
}
