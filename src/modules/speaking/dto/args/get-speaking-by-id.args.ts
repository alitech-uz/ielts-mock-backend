import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetSpeakingByIdArgs {
  @Field(() => ID)
  _id: string;
}
