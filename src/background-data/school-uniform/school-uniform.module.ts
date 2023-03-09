import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolUniformEntity } from './entities/school-uniform.entity';
import { SelectedSchoolUniformEntity } from './entities/selected-school-uniform.entity';
import { SchoolUniformRepository } from './school-uniform.repository';
import { SchoolUniformService } from './school-uniform.service';
import { SelectedSchoolUniformRepository } from './selected-school-uniform.repository';
import { SelectedSchoolUniformService } from './selected-school-uniform.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolUniformEntity, SelectedSchoolUniformEntity])],
  providers: [SchoolUniformService, SchoolUniformRepository, SelectedSchoolUniformService, SelectedSchoolUniformRepository],
  exports: [SchoolUniformService, SchoolUniformRepository, SelectedSchoolUniformService, SelectedSchoolUniformRepository]
})
export class SchoolUniformModule { }
