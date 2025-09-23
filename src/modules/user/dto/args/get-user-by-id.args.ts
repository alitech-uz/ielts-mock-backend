import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetUserByIdArgs {
  @Field()
  id: string;
}
