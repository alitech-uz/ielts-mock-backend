import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CenterOutput {
  @Field(() => ID)
  _id: string;

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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
