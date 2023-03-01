import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreviousInterventionEntity } from './entities/previous-intervention.entity';
import { PreviousInterventionRepository } from './previous-intervention.repository';
import { PreviousInterventionService } from './previous-intervention.service';

@Module({
  imports: [TypeOrmModule.forFeature([ PreviousInterventionEntity ])],
  providers: [PreviousInterventionService, PreviousInterventionRepository],
  exports: [PreviousInterventionService, PreviousInterventionRepository]
})
export class PreviousInterventionModule {}
