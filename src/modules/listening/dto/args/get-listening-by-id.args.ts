import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetListeningByIdArgs {
  @Field()
  id: string;
}
