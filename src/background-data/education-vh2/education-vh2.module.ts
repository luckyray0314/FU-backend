import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationVh2Repository } from './education-vh2.repository';
import { EducationVh2Service } from './education-vh2.service';
import { EducationVh2Entity } from './entities/education-vh2.entity';
import { SelectedEducationVh2Entity } from './entities/selected-education-vh2.entity';
import { SelectedEducationVh2Repository } from './selected-education-vh2.repository';
import { SelectedEducationVh2Service } from './selected-education-vh2.service';

@Module({
  imports: [TypeOrmModule.forFeature([ EducationVh2Entity, SelectedEducationVh2Entity ])],
  providers: [EducationVh2Service, EducationVh2Repository, SelectedEducationVh2Service, SelectedEducationVh2Repository],
  exports: [EducationVh2Service, EducationVh2Repository, SelectedEducationVh2Service, SelectedEducationVh2Repository]
})
export class EducationVh2Module {}
