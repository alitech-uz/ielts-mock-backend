import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetReadingByIdArgs {
  @Field()
  id: string;
}
