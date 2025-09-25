import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetSpeakingByIdArgs {
  @Field()
  id: string;
}
