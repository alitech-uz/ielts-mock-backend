import { HttpException, InternalServerErrorException } from '@nestjs/common';

export function BaseErrorHttp(
  error: unknown,
  fallbackMessage = 'An unexpected error occurred',
) {
  if (error instanceof HttpException) {
    throw error;
  }

  throw new InternalServerErrorException(
    error instanceof Error ? error.message : fallbackMessage,
  );
}
