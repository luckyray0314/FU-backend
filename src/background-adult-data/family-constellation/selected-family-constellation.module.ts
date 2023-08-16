import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedFamilyConstellationAdultEntity } from './entities/selected-family-constellation.entity';
import { SelectedFamilyConstellationAdultService } from './selected-family-constellation.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedFamilyConstellationAdultEntity])],
  providers: [SelectedFamilyConstellationAdultService],
  exports: [SelectedFamilyConstellationAdultService]
})
export class SelectedFamilyConstellationAdultModule { }
