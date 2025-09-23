import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExamSectionService } from '../services/exam-section.service';
import {
  GetExamSectionByIdArgs,
  UpdateExamSectionArgs,
  ExamSectionOutput,
  CreateExamSectionArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => ExamSectionOutput)
export class ExamSectionResolver {
  constructor(private readonly examSectionService: ExamSectionService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [ExamSectionOutput])
  findAllExamSections(@Context('req') req) {
    return this.examSectionService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => ExamSectionOutput)
  findOneExamSection(@Args() args: GetExamSectionByIdArgs) {
    return this.examSectionService.findOne(args.id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ExamSectionOutput)
  createExamSection(@Args() input: CreateExamSectionArgs) {
    return this.examSectionService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ExamSectionOutput)
  updateExamSection(@Args() input: UpdateExamSectionArgs) {
    return this.examSectionService.update(input.id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeExamSection(@Args() args: GetExamSectionByIdArgs) {
    return this.examSectionService.remove(args.id);
  }
}
