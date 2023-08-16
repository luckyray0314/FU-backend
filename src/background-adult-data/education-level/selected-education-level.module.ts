import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedEducationLevelEntity } from './entities/selected-education-level.entity';
import { SelectedEducationLevelService } from './selected-education-level.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedEducationLevelEntity])],
  providers: [SelectedEducationLevelService],
  exports: [SelectedEducationLevelService]
})
export class SelectedEducationLevelModule { }
