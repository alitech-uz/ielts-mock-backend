import { Module } from '@nestjs/common';
import { FileController } from './controllers/file.controller';
import { FileService } from './services/file.service';
import { JwtService } from 'src/common/services/jwt.service';

@Module({
  controllers: [FileController],
  providers: [FileService, JwtService],
})
export class FileModule {}
