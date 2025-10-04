import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '../services/jwt.service';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    // const token = ctx.req.cookies?.['token'];
    const token = ctx.req.headers?.authorization?.split(' ')[1];

    if (!token) return false;

    try {
      const payload = this.jwtService.verify(token);
      ctx.req.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException(
        'You are not authorized to access this resource. Please provide a valid token.',
      );
    }
  }
}
