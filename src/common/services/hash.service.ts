import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HashService {
  private saltRounds: number;

  constructor(configService: ConfigService) {
    this.saltRounds = Number(configService.get<number>('BCRYPT_SALT_ROUNDS'));
  }

  async hash(password: string) {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
