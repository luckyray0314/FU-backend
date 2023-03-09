import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreviousInterventionEntity } from './entities/previous-intervention.entity';
import { SelectedPreviousInterventionEntity } from './entities/selected-previous-intervention.entity';
import { PreviousInterventionRepository } from './previous-intervention.repository';
import { PreviousInterventionService } from './previous-intervention.service';
import { SelectedPreviousInterventionRepository } from './selected-previous-intervention.repository';
import { SelectedPreviousInterventionService } from './selected-previous-intervention.service';

@Module({
  imports: [TypeOrmModule.forFeature([PreviousInterventionEntity, SelectedPreviousInterventionEntity])],
  providers: [PreviousInterventionService, PreviousInterventionRepository, SelectedPreviousInterventionService, SelectedPreviousInterventionRepository],
  exports: [PreviousInterventionService, PreviousInterventionRepository, SelectedPreviousInterventionService, SelectedPreviousInterventionRepository]
})
export class PreviousInterventionModule { }
