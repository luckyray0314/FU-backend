import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedProblemAreaAdultEntity } from './entities/selected-problem-area.entity';
import { SelectedProblemAreaAdultService } from './selected-problem-area.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedProblemAreaAdultEntity])],
  providers: [SelectedProblemAreaAdultService],
  exports: [SelectedProblemAreaAdultService]
})
export class SelectedProblemAreaAdultModule { }
