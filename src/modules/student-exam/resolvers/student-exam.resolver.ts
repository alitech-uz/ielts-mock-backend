import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentExamService } from '../services/student-exam.service';
import {
  GetStudentExamByIdArgs,
  UpdateStudentExamArgs,
  StudentExamOutput,
  CreateStudentExamArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => StudentExamOutput)
export class StudentExamResolver {
  constructor(private readonly studentExamService: StudentExamService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [StudentExamOutput])
  findAllStudentExams(@Context('req') req) {
    return this.studentExamService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => StudentExamOutput)
  findOneStudentExam(@Args() args: GetStudentExamByIdArgs) {
    return this.studentExamService.findOne(args.id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => StudentExamOutput)
  createStudentExam(@Args() input: CreateStudentExamArgs) {
    return this.studentExamService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => StudentExamOutput)
  updateStudentExam(@Args() input: UpdateStudentExamArgs) {
    return this.studentExamService.update(input.id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeStudentExam(@Args() args: GetStudentExamByIdArgs) {
    return this.studentExamService.remove(args.id);
  }
}
