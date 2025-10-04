import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReadingService } from '../services/reading.service';
import {
  GetReadingByIdArgs,
  UpdateReadingArgs,
  ReadingOutput,
  CreateReadingArgs,
} from '../dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/constants';

@Resolver(() => ReadingOutput)
export class ReadingResolver {
  constructor(private readonly readingService: ReadingService) {}

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => [ReadingOutput])
  findAllReadings() {
    return this.readingService.findAll();
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Query(() => ReadingOutput)
  findOneReading(@Args() args: GetReadingByIdArgs) {
    return this.readingService.findOne(args._id);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ReadingOutput)
  createReading(@Args() input: CreateReadingArgs) {
    return this.readingService.create(input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => ReadingOutput)
  updateReading(@Args() input: UpdateReadingArgs) {
    return this.readingService.update(input._id, input);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Roles(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @Mutation(() => Boolean)
  removeReading(@Args() args: GetReadingByIdArgs) {
    return this.readingService.remove(args._id);
  }
}
