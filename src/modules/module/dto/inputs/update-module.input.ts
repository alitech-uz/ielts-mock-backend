import { Field, InputType, PartialType, ID } from '@nestjs/graphql';
import { CreateModuleInput } from './create-module.input';

@InputType()
export class UpdateModuleInput extends PartialType(CreateModuleInput) {
  @Field(() => ID)
  _id: string;

  @Field(() => ID, { nullable: true })
  deletedBy?: string;
}
