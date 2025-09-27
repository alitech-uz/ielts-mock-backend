import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CenterService } from '../services/center.service';
import {
  GetCenterByIdArgs,
  UpdateCenterArgs,
  CenterOutput,
  CreateCenterArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => CenterOutput)
export class CenterResolver {
  constructor(private readonly centerService: CenterService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [CenterOutput])
  findAllCenters() {
    return this.centerService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => CenterOutput)
  findOneCenter(@Args() args: GetCenterByIdArgs) {
    return this.centerService.findOne(args.id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => CenterOutput)
  createCenter(@Args() input: CreateCenterArgs) {
    return this.centerService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => CenterOutput)
  updateCenter(@Args() input: UpdateCenterArgs) {
    return this.centerService.update(input.id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeCenter(@Args() args: GetCenterByIdArgs) {
    return this.centerService.remove(args.id);
  }
}
