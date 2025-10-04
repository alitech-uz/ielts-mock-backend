import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetUserByIdArgs {
  @Field(() => ID)
  _id: string;
}
