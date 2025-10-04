import { Field, InputType, PartialType, ID } from '@nestjs/graphql';
import { CreateExamInput } from './create-exam.input';

@InputType()
export class UpdateExamInput extends PartialType(CreateExamInput) {
  @Field(() => ID)
  _id: string;
}
