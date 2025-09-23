import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class LoginAuthArgs {
  @Field()
  login: string;

  @Field()
  password: string;

  @Field()
  rememberMe?: boolean;
}
