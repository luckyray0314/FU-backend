import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyConstellationEntity } from './entities/family-constellation.entity';
import { FamilyConstellationService } from './family-constellation.service';

@Module({
  imports: [TypeOrmModule.forFeature([FamilyConstellationEntity])],
  providers: [FamilyConstellationService],
  exports: [FamilyConstellationService]
})
export class FamilyConstellationModule { }
