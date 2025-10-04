import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetStudentExamByIdArgs {
  @Field(() => ID)
  _id: string;
}
