import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateExamSectionArgs {
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
}
