import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ReadingPassageOutput } from '../outputs';

@ObjectType()
export class ReadingOutput {
  @Field(() => [ReadingPassageOutput])
  passages: ReadingPassageOutput[];
}
