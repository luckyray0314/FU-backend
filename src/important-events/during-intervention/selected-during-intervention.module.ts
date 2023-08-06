import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedDuringInterventionEntity } from './entities/selected-during-intervention.entity';
import { SelectedDuringInterventionService } from './selected-during-intervention.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedDuringInterventionEntity])],
  providers: [SelectedDuringInterventionService],
  exports: [SelectedDuringInterventionService]
})
export class SelectedDuringInterventionModule { }
