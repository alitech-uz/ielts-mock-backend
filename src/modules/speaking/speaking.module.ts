import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpeakingModel } from './schemas';
import { SpeakingService } from './services/speaking.service';
import { SpeakingResolver } from './resolvers/speaking.resolver';
import { AuthModule } from '../auth/auth.module';
import { FileService } from '../file/services/file.service';

@Module({
  imports: [MongooseModule.forFeature([SpeakingModel]), AuthModule],
  providers: [SpeakingService, SpeakingResolver, FileService],
  exports: [SpeakingService, MongooseModule],
})
export class SpeakingModule {}
