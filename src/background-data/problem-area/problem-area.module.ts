import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemAreaEntity } from './entities/problem-area.entity';
import { ProblemAreaController } from './problem-area.controller';
import { ProblemAreaRepository } from './problem-area.repository';
import { ProblemAreaService } from './problem-area.service';

@Module({
  imports: [TypeOrmModule.forFeature([ ProblemAreaEntity ])],
  providers: [ProblemAreaService, ProblemAreaRepository],
  controllers: [ProblemAreaController],
  exports: [ProblemAreaService, ProblemAreaRepository]
})
export class ProblemAreaModule {}
