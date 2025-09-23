import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CenterOutput {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  login: string;

  @Field()
  password: string;

  @Field()
  role: string;

  @Field()
  image: string;

  @Field()
  centerId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
