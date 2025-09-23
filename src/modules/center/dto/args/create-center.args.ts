import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateCenterArgs {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  login: string;

  @Field()
  password: string;

  @Field()
  centerId: string;
}
