import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateExamInput } from './create-exam.input';

@InputType()
export class UpdateExamInput extends PartialType(CreateExamInput) {
  @Field()
  id: string;
}
