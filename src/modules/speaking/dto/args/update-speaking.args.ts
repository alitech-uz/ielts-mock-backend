import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateSpeakingArgs } from './create-speaking.args';

@ArgsType()
export class UpdateSpeakingArgs extends PartialType(CreateSpeakingArgs) {
  @Field(() => ID)
  _id: string;
}
