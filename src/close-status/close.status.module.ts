import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackgroundMetadataModule } from 'src/background-data/background-metadata.module';
import { CloseStatusEntity } from './entities/close-status.entity';
import { CloseStatusController } from './close.status.controller';
import { CloseStatusService } from './close.status.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CloseStatusEntity]),
    BackgroundMetadataModule,
  ],
  providers: [CloseStatusService],
  controllers: [CloseStatusController],
  exports: [CloseStatusService]
})
export class CloseStatusModule { }
