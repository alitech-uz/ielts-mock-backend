import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateExamArgs } from './create-exam.args';

@ArgsType()
export class UpdateExamArgs extends PartialType(CreateExamArgs) {
  @Field(() => ID)
  _id: string;
}
