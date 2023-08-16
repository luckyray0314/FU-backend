import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedPreviousEffortEntity } from './entities/selected-previous-effort.entity';
import { SelectedPreviousEffortService } from './selected-previous-effort.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedPreviousEffortEntity])],
  providers: [SelectedPreviousEffortService],
  exports: [SelectedPreviousEffortService]
})
export class SelectedPreviousEffortModule { }
