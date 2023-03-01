import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyConstellationEntity } from './entities/family-constellation.entity';
import { FamilyConstellationController } from './family-constellation.controller';
import { FamilyConstellationRepository } from './family-constellation.repository';
import { FamilyConstellationService } from './family-constellation.service';

@Module({
  imports: [TypeOrmModule.forFeature([ FamilyConstellationEntity ])],
  providers: [FamilyConstellationService, FamilyConstellationRepository],
  controllers: [FamilyConstellationController],
  exports: [FamilyConstellationService, FamilyConstellationRepository]
})
export class FamilyConstellationModule {}
