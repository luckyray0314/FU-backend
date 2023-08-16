import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedOtherOngoingEffortEntity } from './entities/selected-other-ongoing-effort.entity';
import { SelectedOtherOngoingEffortService } from './selected-other-ongoing-effort.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedOtherOngoingEffortEntity])],
  providers: [SelectedOtherOngoingEffortService],
  exports: [SelectedOtherOngoingEffortService]
})
export class SelectedOtherOngoingEffortModule { }
