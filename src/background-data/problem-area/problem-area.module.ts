import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemAreaEntity } from './entities/problem-area.entity';
import { SelectedProblemAreaEntity } from './entities/selected-problem-area.entity';
import { ProblemAreaRepository } from './problem-area.repository';
import { ProblemAreaService } from './problem-area.service';
import { SelectedProblemAreaRepository } from './selected-problem-area.repository';
import { SelectedProblemAreaService } from './selected-problem-area.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemAreaEntity, SelectedProblemAreaEntity])],
  providers: [ProblemAreaService, ProblemAreaRepository, SelectedProblemAreaService, SelectedProblemAreaRepository],
  exports: [ProblemAreaService, ProblemAreaRepository, SelectedProblemAreaService, SelectedProblemAreaRepository]
})
export class ProblemAreaModule { }
