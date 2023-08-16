import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemAreaAdultEntity } from './entities/problem-area.entity';
import { ProblemAreaAdultService } from './problem-area.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemAreaAdultEntity])],
  providers: [ProblemAreaAdultService],
  exports: [ProblemAreaAdultService]
})
export class ProblemAreaAdultModule { }
