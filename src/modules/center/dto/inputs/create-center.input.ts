import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCenterInput {
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
