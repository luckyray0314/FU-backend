import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedProblemAreaEntity } from './entities/selected-problem-area.entity';
import { SelectedProblemAreaService } from './selected-problem-area.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedProblemAreaEntity])],
  providers: [SelectedProblemAreaService],
  exports: [SelectedProblemAreaService]
})
export class SelectedProblemAreaModule { }
