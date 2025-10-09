import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateStudentAnswerArgs, StudentAnswerOutput } from '../dto';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { ROLES } from 'src/common/constants';
import { StudentAnswerService } from '../services/student-answer.service';

@Resolver(() => StudentAnswerOutput)
export class StudentAnswerResolver {
  constructor(private readonly studentAnswerService: StudentAnswerService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => StudentAnswerOutput)
  createStudentAnswerWriting(@Args() input: CreateStudentAnswerArgs) {
    return this.studentAnswerService.createWriting(input);
  }
}
