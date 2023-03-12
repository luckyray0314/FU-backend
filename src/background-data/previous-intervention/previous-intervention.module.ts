import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreviousInterventionEntity } from './entities/previous-intervention.entity';
import { PreviousInterventionService } from './previous-intervention.service';

@Module({
  imports: [TypeOrmModule.forFeature([PreviousInterventionEntity])],
  providers: [PreviousInterventionService],
  exports: [PreviousInterventionService]
})
export class PreviousInterventionModule { }
