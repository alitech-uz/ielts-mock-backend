import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'UPDATE'],
    credentials: true,
  });

  app.use(express.static(join(process.cwd(), 'uploads')));

  app.use(cookieParser());

  const configService = app.get(ConfigService);

  const PORT = configService.get<string>('PORT') || 9091;

  await app.listen(PORT);

  console.log(`Server is running on port: ${PORT}🎉`);
}
bootstrap();
