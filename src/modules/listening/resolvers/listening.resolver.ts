import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ListeningService } from '../services/listening.service';
import {
  GetListeningByIdArgs,
  UpdateListeningArgs,
  ListeningOutput,
  CreateListeningArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => ListeningOutput)
export class ListeningResolver {
  constructor(private readonly listeningService: ListeningService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [ListeningOutput])
  findAllListenings() {
    return this.listeningService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => ListeningOutput)
  findOneListening(@Args() args: GetListeningByIdArgs) {
    return this.listeningService.findOne(args.id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ListeningOutput)
  createListening(@Args() input: CreateListeningArgs) {
    return this.listeningService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ListeningOutput)
  updateListening(@Args() input: UpdateListeningArgs) {
    return this.listeningService.update(input.id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeListening(@Args() args: GetListeningByIdArgs) {
    return this.listeningService.remove(args.id);
  }
}
