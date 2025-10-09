import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetByIdArgs {
  @Field(() => ID)
  _id: string;
}
