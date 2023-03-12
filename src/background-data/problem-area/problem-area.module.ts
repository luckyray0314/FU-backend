import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemAreaEntity } from './entities/problem-area.entity';
import { ProblemAreaService } from './problem-area.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemAreaEntity])],
  providers: [ProblemAreaService],
  exports: [ProblemAreaService]
})
export class ProblemAreaModule { }
