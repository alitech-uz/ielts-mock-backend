import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleModel } from './schemas';
import { ModuleService } from './services/module.service';
import { ModuleResolver } from './resolvers/module.resolver';
import { AuthModule } from '../auth/auth.module';
import { FileService } from '../file/services/file.service';

@Module({
  imports: [MongooseModule.forFeature([ModuleModel]), AuthModule],
  providers: [ModuleService, ModuleResolver, FileService],
  exports: [ModuleService, MongooseModule],
})
export class ModuleModule {}
