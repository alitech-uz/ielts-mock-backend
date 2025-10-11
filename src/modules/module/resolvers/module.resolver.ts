import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ModuleService } from '../services/module.service';
import { CreateModuleInput, UpdateModuleInput, ModuleOutput } from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';
import { GetByIdArgs } from 'src/common/dto/args';

@Resolver(() => ModuleOutput)
export class ModuleResolver {
  constructor(private readonly moduleService: ModuleService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [ModuleOutput])
  findAllModules() {
    return this.moduleService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => ModuleOutput)
  findOneModule(@Args() args: GetByIdArgs) {
    return this.moduleService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ModuleOutput)
  createModule(@Args('input') input: CreateModuleInput) {
    return this.moduleService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ModuleOutput)
  updateModule(@Args('input') input: UpdateModuleInput) {
    return this.moduleService.update(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeModule(@Args() args: GetByIdArgs, @Context() context: any) {
    const authId = context.req.user.id;

    return this.moduleService.remove(args._id, authId);
  }
}
