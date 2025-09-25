import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateWritingArgs } from './create-writing.args';

@ArgsType()
export class UpdateWritingArgs extends PartialType(CreateWritingArgs) {
  @Field(() => ID)
  id: string;
}
