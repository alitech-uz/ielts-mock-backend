import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartModel } from './schemas';
import { PartResolver } from './resolvers/part.resolver';
import { PartService } from './services/part.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([PartModel]), AuthModule],
  providers: [PartService, PartResolver],
  exports: [MongooseModule],
})
export class PartModule {}
