import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackgroundMetadataModule } from 'src/background-data/background-metadata.module';
import { CloseStatusEntity } from './entities/close.status.child.entity';
import { CloseStatusController } from './close.status.child.controller';
import { CloseStatusService } from './close.status.child.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CloseStatusEntity]),
    BackgroundMetadataModule,
  ],
  providers: [CloseStatusService],
  controllers: [CloseStatusController],
  exports: [CloseStatusService],
})
export class CloseStatusModule {}
