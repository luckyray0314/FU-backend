import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedReasonForTerminationEntity } from './entities/selected-reason-for-termination.entity';
import { SelectedReasonForTerminationService } from './selected-reason-for-termination.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedReasonForTerminationEntity])],
  providers: [SelectedReasonForTerminationService],
  exports: [SelectedReasonForTerminationService]
})
export class SelectedReasonForTerminationModule { }
