import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedPreviousInterventionEntity } from './entities/selected-previous-intervention.entity';
import { SelectedPreviousInterventionService } from './selected-previous-intervention.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedPreviousInterventionEntity])],
  providers: [SelectedPreviousInterventionService],
  exports: [SelectedPreviousInterventionService]
})
export class SelectedPreviousInterventionModule { }
