import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLError } from 'graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPlugin } from '@apollo/server';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uploads: false,
        playground: false,
        introspection: true,
        autoSchemaFile: true,
        csrfPrevention: false,
        plugins: [
          ApolloServerPluginLandingPageLocalDefault() as ApolloServerPlugin,
        ],
        context: ({ req, res }) => ({ req, res }),
        formatError: (error: GraphQLError) => {
          const isProduction = configService.get('NODE_ENV') === 'production';

          return {
            path: error.path,
            message: error.message,
            extensions: isProduction
              ? { code: error.extensions?.code }
              : error.extensions,
          };
        },
      }),
    }),
  ],
})
export class GraphqlConfig {}
