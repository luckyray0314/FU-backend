import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyConstellationAdultEntity } from './entities/family-constellation.entity';
import { FamilyConstellationAdultService } from './family-constellation.service';

@Module({
  imports: [TypeOrmModule.forFeature([FamilyConstellationAdultEntity])],
  providers: [FamilyConstellationAdultService],
  exports: [FamilyConstellationAdultService]
})
export class FamilyConstellationAdultModule { }
