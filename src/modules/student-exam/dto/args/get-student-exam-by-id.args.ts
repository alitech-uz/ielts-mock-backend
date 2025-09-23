import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetStudentExamByIdArgs {
  @Field()
  id: string;
}
