import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginAuthInput {
  @Field()
  phone: string;

  @Field()
  password: string;

  @Field()
  rememberMe?: boolean;
}
