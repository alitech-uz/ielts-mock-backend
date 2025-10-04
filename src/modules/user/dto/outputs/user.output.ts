import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserOutput {
  @Field(() => ID)
  _id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phone: string;

  @Field()
  password: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  centerId?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
