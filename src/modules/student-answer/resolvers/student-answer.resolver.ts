import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { ROLES } from 'src/common/constants';
import { StudentAnswerService } from '../services/student-answer.service';
import { GetByIdArgs } from 'src/common/dto/args';
import { CreateStudentAnswerInput, StudentAnswerOutput } from '../dto';
import { UpdateStudentAnswerInput } from '../dto/inputs/update-student-answer.input';

@Resolver(() => StudentAnswerOutput)
export class StudentAnswerResolver {
  constructor(private readonly studentAnswerService: StudentAnswerService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [StudentAnswerOutput])
  findAllStudentAnswers() {
    return this.studentAnswerService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => StudentAnswerOutput)
  findOneStudentAnswer(@Args() args: GetByIdArgs) {
    return this.studentAnswerService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => StudentAnswerOutput)
  createStudentAnswer(@Args('input') input: CreateStudentAnswerInput) {
    return this.studentAnswerService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => StudentAnswerOutput)
  updateStudentAnswer(
    @Args('input') input: UpdateStudentAnswerInput,
    @Context() context: any,
  ) {
    const authId = context.req.user.id;

    return this.studentAnswerService.update(input, authId);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeStudentAnswer(@Args() args: GetByIdArgs, @Context() context: any) {
    const authId = context.req.user.id;

    return this.studentAnswerService.remove(args._id, authId);
  }
}
