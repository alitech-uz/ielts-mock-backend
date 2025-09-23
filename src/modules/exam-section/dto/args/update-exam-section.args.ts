import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateExamSectionArgs } from './create-exam-section.args';

@ArgsType()
export class UpdateExamSectionArgs extends PartialType(CreateExamSectionArgs) {
  @Field(() => ID)
  id: string;
}
