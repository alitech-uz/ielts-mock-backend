import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '../services/jwt.service';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    const token = ctx.req.cookies?.['token'];
    if (!token) return false;

    try {
      const payload = this.jwtService.verify(token);
      ctx.req.user = payload;
      return true;
    } catch (error) {
      return false;
    }
  }
}
