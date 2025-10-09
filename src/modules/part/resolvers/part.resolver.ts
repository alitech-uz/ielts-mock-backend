import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';
import { GetByIdArgs } from 'src/common/dto/args';
import { PartService } from '../services/part.service';
import { CreatePartInput, PartOutput, UpdatePartInput } from '../dto';

@Resolver(() => PartOutput)
export class PartResolver {
  constructor(private readonly partService: PartService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [PartOutput])
  findAllParts() {
    return this.partService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => PartOutput)
  findOnePart(@Args() args: GetByIdArgs) {
    return this.partService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => PartOutput)
  createPart(@Args('input') input: CreatePartInput) {
    return this.partService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => PartOutput)
  updatePart(@Args('input') input: UpdatePartInput) {
    return this.partService.update(input._id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removePart(@Args() args: GetByIdArgs, @Context() context: any) {
    const authId = context.req.user.id;

    return this.partService.remove(args._id, authId);
  }
}
