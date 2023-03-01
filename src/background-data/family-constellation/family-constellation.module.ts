import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyConstellationEntity } from './entities/family-constellation.entity';
import { FamilyConstellationRepository } from './family-constellation.repository';
import { FamilyConstellationService } from './family-constellation.service';

@Module({
  imports: [TypeOrmModule.forFeature([ FamilyConstellationEntity ])],
  providers: [FamilyConstellationService, FamilyConstellationRepository],
  exports: [FamilyConstellationService, FamilyConstellationRepository]
})
export class FamilyConstellationModule {}
