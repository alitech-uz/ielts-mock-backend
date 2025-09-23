import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateUserArgs } from './create-user.args';

@ArgsType()
export class UpdateUserArgs extends PartialType(CreateUserArgs) {
  @Field(() => ID)
  id: string;
}
