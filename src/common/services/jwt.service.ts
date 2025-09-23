import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtService {
  private readonly secret: string;

  constructor(private readonly configService: ConfigService) {
    this.secret = this.configService.get<string>('JWT_SECRET', '');
  }

  sign(payload: object, expiresIn: string = '24h') {
    console.log(expiresIn);

    return jwt.sign(payload, this.secret, { expiresIn });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  decode(token: string) {
    return jwt.decode(token);
  }
}
