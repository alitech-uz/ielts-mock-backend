import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetExamSectionByIdArgs {
  @Field()
  id: string;
}
