
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuringInterventionEntity } from './entities/during-intervention.entity';
import { DuringInterventionService } from './during-intervention.service';

@Module({
  imports: [TypeOrmModule.forFeature([DuringInterventionEntity])],
  providers: [DuringInterventionService],
  exports: [DuringInterventionService]
})
export class DuringInterventionModule { }
