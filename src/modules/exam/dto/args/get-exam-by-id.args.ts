import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetExamByIdArgs {
  @Field(() => ID)
  _id: string;
}
