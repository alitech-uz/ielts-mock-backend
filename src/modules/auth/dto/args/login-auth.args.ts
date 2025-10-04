import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class LoginAuthArgs {
  @Field()
  phone: string;

  @Field()
  password: string;

  @Field()
  rememberMe?: boolean;
}
