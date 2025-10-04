import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginOutput {
  @Field(() => ID)
  _id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phone: string;

  @Field()
  role: string;

  @Field(() => String)
  token: string;
}
