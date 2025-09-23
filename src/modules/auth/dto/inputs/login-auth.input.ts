import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginAuthInput {
  @Field()
  login: string;

  @Field()
  password: string;

  @Field()
  rememberMe?: boolean;
}
