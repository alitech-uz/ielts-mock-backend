import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExamSectionOutput {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  audio?: string;

  @Field({ nullable: true })
  sourceFile?: string;

  @Field({ nullable: true })
  sourceUrl: string;

  @Field()
  questions: string;

  @Field()
  answers: string;

  @Field()
  sectionType: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
