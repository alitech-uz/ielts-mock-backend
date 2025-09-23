import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserOutput } from 'src/modules/user/dto';
import { AuthService } from '../services/auth.service';
import { Response } from 'express';
import { LoginAuthArgs } from '../dto/args';

@Resolver(() => UserOutput)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserOutput)
  async login(
    @Args() input: LoginAuthArgs,
    @Context() context: { res: Response },
  ) {
    const { existingUser, token } = await this.authService.login(input);

    context.res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24,
    });

    return existingUser;
  }

  @Mutation(() => String)
  async logout(@Context() context: { res: Response }) {
    context.res.clearCookie('token');
    return 'Logged out';
  }
}
