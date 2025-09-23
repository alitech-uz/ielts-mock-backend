import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CenterOutput {
  @Field(() => ID)
  id: string;

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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
