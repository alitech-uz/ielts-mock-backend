import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetCenterByIdArgs {
  @Field(() => ID)
  _id: string;
}
