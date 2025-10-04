import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import {
  GetUserByIdArgs,
  UpdateUserArgs,
  UserOutput,
  CreateUserArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => UserOutput)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [UserOutput])
  findAllUsers() {
    return this.userService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => UserOutput)
  findOneUser(@Args() args: GetUserByIdArgs) {
    return this.userService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN)
  @Mutation(() => UserOutput)
  createUser(@Args() input: CreateUserArgs) {
    return this.userService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN)
  @Mutation(() => UserOutput)
  updateUser(@Args() input: UpdateUserArgs) {
    return this.userService.update(input._id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN)
  @Mutation(() => Boolean)
  removeUser(@Args() args: GetUserByIdArgs) {
    return this.userService.remove(args._id);
  }
}
