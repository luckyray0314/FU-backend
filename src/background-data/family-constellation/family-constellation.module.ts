import { Module } from '@nestjs/common';
import { FamilyConstellationService } from './family-constellation.service';
import { FamilyConstellationController } from './family-constellation.controller';

@Module({
  controllers: [FamilyConstellationController],
  providers: [FamilyConstellationService]
})
export class FamilyConstellationModule {}
