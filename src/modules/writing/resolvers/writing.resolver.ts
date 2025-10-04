import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WritingService } from '../services/writing.service';
import {
  GetWritingByIdArgs,
  UpdateWritingArgs,
  WritingOutput,
  CreateWritingArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => WritingOutput)
export class WritingResolver {
  constructor(private readonly writingService: WritingService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [WritingOutput])
  findAllWritings() {
    return this.writingService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => WritingOutput)
  findOneWriting(@Args() args: GetWritingByIdArgs) {
    return this.writingService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => WritingOutput)
  createWriting(@Args() input: CreateWritingArgs) {
    return this.writingService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => WritingOutput)
  updateWriting(@Args() input: UpdateWritingArgs) {
    return this.writingService.update(input._id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeWriting(@Args() args: GetWritingByIdArgs) {
    return this.writingService.remove(args._id);
  }
}
