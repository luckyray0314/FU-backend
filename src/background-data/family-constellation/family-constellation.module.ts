import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyConstellationEntity } from './entities/family-constellation.entity';
import { SelectedFamilyConstellationEntity } from './entities/selected-family-constellation.entity';
import { FamilyConstellationRepository } from './family-constellation.repository';
import { FamilyConstellationService } from './family-constellation.service';
import { SelectedFamilyConstellationRepository } from './selected-family-constellation.repository';
import { SelectedFamilyConstellationService } from './selected-family-constellation.service';

@Module({
  imports: [TypeOrmModule.forFeature([FamilyConstellationEntity, SelectedFamilyConstellationEntity])],
  providers: [FamilyConstellationService, FamilyConstellationRepository, SelectedFamilyConstellationService, SelectedFamilyConstellationRepository],
  exports: [FamilyConstellationService, FamilyConstellationRepository, SelectedFamilyConstellationService, SelectedFamilyConstellationRepository]
})
export class FamilyConstellationModule { }
