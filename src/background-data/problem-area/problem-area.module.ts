import { Module } from '@nestjs/common';
import { ProblemAreaService } from './problem-area.service';
import { ProblemAreaController } from './problem-area.controller';

@Module({
  controllers: [ProblemAreaController],
  providers: [ProblemAreaService]
})
export class ProblemAreaModule {}
