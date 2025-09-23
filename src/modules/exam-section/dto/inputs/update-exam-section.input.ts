import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateExamSectionInput } from './create-exam-section.input';

@InputType()
export class UpdateExamSectionInput extends PartialType(
  CreateExamSectionInput,
) {
  @Field()
  id: string;
}
