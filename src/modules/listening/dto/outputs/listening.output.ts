import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ListeningPartOutput } from '.';

@ObjectType()
export class ListeningOutput {
  @Field(() => [ListeningPartOutput])
  parts: ListeningPartOutput[];
}
