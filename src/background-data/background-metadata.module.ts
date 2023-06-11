import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackgroundMetadataController } from './background-metadata.controller';
import { BackgroundMetadataEntity } from './background-metadata.entity';
import { BackgroundMetadataService } from './background-metadata.service';

@Module({
  imports: [TypeOrmModule.forFeature([BackgroundMetadataEntity])],
  providers: [BackgroundMetadataService],
  controllers: [BackgroundMetadataController],
  exports: [BackgroundMetadataService],
})
export class BackgroundMetadataModule { }
