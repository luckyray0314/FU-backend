import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationLevelEntity } from './entities/education-level.entity';
import { EducationLevelService } from './education-level.service';

@Module({
  imports: [TypeOrmModule.forFeature([EducationLevelEntity])],
  providers: [EducationLevelService],
  exports: [EducationLevelService]
})
export class EducationLevelModule { }
