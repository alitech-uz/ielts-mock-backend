import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetWritingByIdArgs {
  @Field()
  id: string;
}
