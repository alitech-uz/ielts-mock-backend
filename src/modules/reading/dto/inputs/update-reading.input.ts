import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateReadingInput } from './create-reading.input';

@InputType()
export class UpdateReadingInput extends PartialType(CreateReadingInput) {
  @Field()
  id: string;
}
