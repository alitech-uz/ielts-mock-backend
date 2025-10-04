import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetListeningByIdArgs {
  @Field(() => ID)
  _id: string;
}
