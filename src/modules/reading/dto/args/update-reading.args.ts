import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateReadingArgs } from './create-reading.args';

@ArgsType()
export class UpdateReadingArgs extends PartialType(CreateReadingArgs) {
  @Field(() => ID)
  _id: string;
}
