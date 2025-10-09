import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OptionOutput {
  @Field()
  title: string;

  @Field()
  isCorrectAnswer: boolean;

  @Field({ nullable: true })
  key?: string;
}
