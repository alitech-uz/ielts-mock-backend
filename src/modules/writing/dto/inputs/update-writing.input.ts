import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateWritingInput } from './create-writing.input';

@InputType()
export class UpdateWritingInput extends PartialType(CreateWritingInput) {
  @Field()
  id: string;
}
