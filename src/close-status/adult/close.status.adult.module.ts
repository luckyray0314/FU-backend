import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackgroundAdultMetadataModule } from 'src/background-adult-data/background-adult-metadata.module';
import { CloseStatusAdultEntity } from './entities/close.status.adult.entity';
import { CloseStatusAdultController } from './close.status.adult.controller';
import { CloseStatusAdultService } from './close.status.adult.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CloseStatusAdultEntity]),
    BackgroundAdultMetadataModule,
  ],
  providers: [CloseStatusAdultService],
  controllers: [CloseStatusAdultController],
  exports: [CloseStatusAdultService],
})
export class CloseStatusAdultModule {}
