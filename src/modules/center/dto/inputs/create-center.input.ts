import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCenterInput {
  @Field()
  address: string;

  @Field()
  phone: string;

  @Field()
  name: string;

  @Field()
  logo: string;

  @Field()
  estabilishedAt: Date;
}
