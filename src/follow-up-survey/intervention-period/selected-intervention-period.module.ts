import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedInterventionPeriodEntity } from './entities/selected-intervention-period.entity';
import { SelectedInterventionPeriodService } from './selected-intervention-period.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedInterventionPeriodEntity])],
  providers: [SelectedInterventionPeriodService],
  exports: [SelectedInterventionPeriodService]
})
export class SelectedInterventionPeriodModule { }
