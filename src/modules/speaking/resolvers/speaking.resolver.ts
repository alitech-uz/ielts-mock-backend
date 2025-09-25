import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SpeakingService } from '../services/speaking.service';
import {
  GetSpeakingByIdArgs,
  UpdateSpeakingArgs,
  SpeakingOutput,
  CreateSpeakingArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => SpeakingOutput)
export class SpeakingResolver {
  constructor(private readonly speakingService: SpeakingService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [SpeakingOutput])
  findAllSpeakings(@Context('req') req) {
    return this.speakingService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => SpeakingOutput)
  findOneSpeaking(@Args() args: GetSpeakingByIdArgs) {
    return this.speakingService.findOne(args.id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => SpeakingOutput)
  createSpeaking(@Args() input: CreateSpeakingArgs) {
    return this.speakingService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => SpeakingOutput)
  updateSpeaking(@Args() input: UpdateSpeakingArgs) {
    return this.speakingService.update(input.id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeSpeaking(@Args() args: GetSpeakingByIdArgs) {
    return this.speakingService.remove(args.id);
  }
}
