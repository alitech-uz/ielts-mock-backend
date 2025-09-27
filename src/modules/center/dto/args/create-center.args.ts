import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateCenterArgs {
  @Field()
  address: string;

  @Field()
  phone: string;

  @Field()
  name: string;

  @Field()
  logo: string;

  @Field()
  establishedAt: Date;
}
