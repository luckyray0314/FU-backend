import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedFamilyConstellationEntity } from './entities/selected-family-constellation.entity';
import { SelectedFamilyConstellationService } from './selected-family-constellation.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedFamilyConstellationEntity])],
  providers: [SelectedFamilyConstellationService],
  exports: [SelectedFamilyConstellationService]
})
export class SelectedFamilyConstellationModule { }
