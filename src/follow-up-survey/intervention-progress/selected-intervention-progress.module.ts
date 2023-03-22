import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedInterventionProgressEntity } from './entities/selected-intervention-progress.entity';
import { SelectedInterventionProgressService } from './selected-intervention-progress.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedInterventionProgressEntity])],
  providers: [SelectedInterventionProgressService],
  exports: [SelectedInterventionProgressService]
})
export class SelectedInterventionProgressModule { }
