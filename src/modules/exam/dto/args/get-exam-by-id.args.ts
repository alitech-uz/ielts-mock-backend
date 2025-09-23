import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetExamByIdArgs {
  @Field()
  id: string;
}
