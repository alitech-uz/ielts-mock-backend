import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateCenterArgs } from './create-center.args';

@ArgsType()
export class UpdateCenterArgs extends PartialType(CreateCenterArgs) {
  @Field(() => ID)
  id: string;
}
