import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginOutput {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  login: string;

  @Field()
  role: string;

  @Field(() => String)
  token: string;
}
