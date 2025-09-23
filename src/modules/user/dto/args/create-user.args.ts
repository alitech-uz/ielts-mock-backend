import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  login: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  centerId?: string;
}
