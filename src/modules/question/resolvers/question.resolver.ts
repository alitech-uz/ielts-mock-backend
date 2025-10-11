import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';
import { GetByIdArgs } from 'src/common/dto/args';
import { QuestionService } from '../services/question.service';
import {
  CreateQuestionInput,
  QuestionOutput,
  UpdateQuestionInput,
} from '../dto';

@Resolver(() => QuestionOutput)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [QuestionOutput])
  findAllQuestions() {
    return this.questionService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => QuestionOutput)
  findOneQuestion(@Args() args: GetByIdArgs) {
    return this.questionService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => QuestionOutput)
  createQuestion(@Args('input') input: CreateQuestionInput) {
    return this.questionService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => QuestionOutput)
  updateQuestion(@Args('input') input: UpdateQuestionInput) {
    return this.questionService.update(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeQuestion(@Args() args: GetByIdArgs, @Context() context: any) {
    const authId = context.req.user.id;

    return this.questionService.remove(args._id, authId);
  }
}
