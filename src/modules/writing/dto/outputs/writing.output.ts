import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { PartOutput } from 'src/modules/part/dto';
@ObjectType()
export class WritingOutput {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  duration: number;

  @Field(() => [PartOutput], { nullable: true })
  parts?: PartOutput[];
}
