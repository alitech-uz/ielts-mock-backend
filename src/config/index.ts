import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphqlConfig } from './graphql.config';
import { MongodbConfig } from './mongodb.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongodbConfig,
    GraphqlConfig,
  ],
})
export class Configs {}
