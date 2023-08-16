import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackgroundAdultMetadataController } from './background-adult-metadata.controller';
import { BackgroundAdultMetadataEntity } from './background-adult-metadata.entity';
import { BackgroundAdultMetadataService } from './background-adult-metadata.service';

@Module({
  imports: [TypeOrmModule.forFeature([BackgroundAdultMetadataEntity])],
  providers: [BackgroundAdultMetadataService],
  controllers: [BackgroundAdultMetadataController],
  exports: [BackgroundAdultMetadataService],
})
export class BackgroundAdultMetadataModule { }
