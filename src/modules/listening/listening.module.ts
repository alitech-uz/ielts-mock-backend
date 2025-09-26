import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListeningModel } from './schemas';
import { ListeningService } from './services/listening.service';
import { ListeningResolver } from './resolvers/listening.resolver';
import { AuthModule } from '../auth/auth.module';
import { FileService } from '../file/services/file.service';

@Module({
  imports: [MongooseModule.forFeature([ListeningModel]), AuthModule],
  providers: [ListeningService, ListeningResolver, FileService],
  exports: [ListeningService, MongooseModule],
})
export class ListeningModule {}
