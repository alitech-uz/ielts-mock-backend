import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WritingService } from '../services/writing.service';
import { CreateWritingInput, UpdateWritingInput, WritingOutput } from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';
import { GetByIdArgs } from 'src/common/dto/args';

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
  findOneWriting(@Args() args: GetByIdArgs) {
    return this.writingService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => WritingOutput)
  createWriting(@Args('input') input: CreateWritingInput) {
    return this.writingService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => WritingOutput)
  updateWriting(@Args('input') input: UpdateWritingInput) {
    return this.writingService.update(input._id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeWriting(@Args() args: GetByIdArgs, @Context() context: any) {
    const authId = context.req.user.id;

    return this.writingService.remove(args._id, authId);
  }
}
