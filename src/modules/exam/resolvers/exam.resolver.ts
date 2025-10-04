import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExamService } from '../services/exam.service';
import {
  GetExamByIdArgs,
  UpdateExamArgs,
  ExamOutput,
  CreateExamArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => ExamOutput)
export class ExamResolver {
  constructor(private readonly examService: ExamService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [ExamOutput])
  findAllExams() {
    return this.examService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => ExamOutput)
  findOneExam(@Args() args: GetExamByIdArgs) {
    return this.examService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ExamOutput)
  createExam(@Args() input: CreateExamArgs) {
    return this.examService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ExamOutput)
  updateExam(@Args() input: UpdateExamArgs) {
    return this.examService.update(input._id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeExam(@Args() args: GetExamByIdArgs) {
    return this.examService.remove(args._id);
  }
}
