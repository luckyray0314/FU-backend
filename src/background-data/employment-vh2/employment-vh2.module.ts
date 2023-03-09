import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentVh2Repository } from './employment-vh2.repository';
import { EmploymentVh2Service } from './employment-vh2.service';
import { EmploymentVh2Entity } from './entities/employment-vh2.entity';
import { SelectedEmploymentVh2Entity } from './entities/selected-employment-vh2.entity';
import { SelectedEmploymentVh2Repository } from './selected-employment-vh2.repository';
import { SelectedEmploymentVh2Service } from './selected-employment-vh2.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmploymentVh2Entity, SelectedEmploymentVh2Entity])],
  providers: [EmploymentVh2Service, EmploymentVh2Repository, SelectedEmploymentVh2Service, SelectedEmploymentVh2Repository],
  exports: [EmploymentVh2Service, EmploymentVh2Repository, SelectedEmploymentVh2Service, SelectedEmploymentVh2Repository]
})
export class EmploymentVh2Module { }
