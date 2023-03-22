import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowUpMetadataController } from './follow-up-metadata.controller';
import { FollowUpMetadataEntity } from './follow-up-metadata.entity';
import { FollowUpMetadataService } from './follow-up-metadata.service';

@Module({
  imports: [TypeOrmModule.forFeature([FollowUpMetadataEntity])],
  providers: [FollowUpMetadataService],
  controllers: [FollowUpMetadataController],
  exports: [FollowUpMetadataService],
})
export class FollowUpMetadataModule { }
