import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationVh1Repository } from './education-vh1.repository';
import { EducationVh1Service } from './education-vh1.service';
import { EducationVh1Entity } from './entities/education-vh1.entity';
import { SelectedEducationVh1Entity } from './entities/selected-education-vh1.entity';
import { SelectedEducationVh1Repository } from './selected-education-vh1.repository';
import { SelectedEducationVh1Service } from './selected-education-vh1.service';

@Module({
  imports: [TypeOrmModule.forFeature([EducationVh1Entity, SelectedEducationVh1Entity])],
  providers: [EducationVh1Service, EducationVh1Repository, SelectedEducationVh1Service, SelectedEducationVh1Repository],
  exports: [EducationVh1Service, EducationVh1Repository, SelectedEducationVh1Service, SelectedEducationVh1Repository]
})
export class EducationVh1Module { }
