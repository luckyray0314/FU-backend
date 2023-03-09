import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentVh1Repository } from './employment-vh1.repository';
import { EmploymentVh1Service } from './employment-vh1.service';
import { EmploymentVh1Entity } from './entities/employment-vh1.entity';
import { SelectedEmploymentVh1Entity } from './entities/selected-employment-vh1.entity';
import { SelectedEmploymentVh1Repository } from './selected-employment-vh1.repository';
import { SelectedEmploymentVh1Service } from './selected-employment-vh1.service';

@Module({
  imports: [TypeOrmModule.forFeature([ EmploymentVh1Entity, SelectedEmploymentVh1Entity ])],
  providers: [EmploymentVh1Service, EmploymentVh1Repository, SelectedEmploymentVh1Service, SelectedEmploymentVh1Repository],
  exports: [EmploymentVh1Service, EmploymentVh1Repository, SelectedEmploymentVh1Service, SelectedEmploymentVh1Repository]
})
export class EmploymentVh1Module {}
