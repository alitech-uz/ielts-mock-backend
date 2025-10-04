import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';
import { Response } from 'express';
import { LoginAuthArgs } from '../dto/args';
import { LoginOutput } from '../dto/outputs';

@Resolver(() => LoginOutput)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginOutput)
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

    return {
      id: existingUser.id,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      phone: existingUser.phone,
      role: existingUser.role,
      token,
    };
  }

  @Mutation(() => String)
  async logout(@Context() context: { res: Response }) {
    context.res.clearCookie('token');
    return 'Logged out';
  }
}
