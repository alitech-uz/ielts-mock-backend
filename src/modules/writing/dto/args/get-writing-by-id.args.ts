import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetWritingByIdArgs {
  @Field(() => ID)
  _id: string;
}
