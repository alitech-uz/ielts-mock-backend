import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phone: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  centerId?: string;
}
