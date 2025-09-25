import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateListeningArgs } from './create-listening.args';

@ArgsType()
export class UpdateListeningArgs extends PartialType(CreateListeningArgs) {
  @Field(() => ID)
  id: string;
}
