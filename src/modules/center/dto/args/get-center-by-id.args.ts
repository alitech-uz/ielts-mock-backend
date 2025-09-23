import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetCenterByIdArgs {
  @Field()
  id: string;
}
