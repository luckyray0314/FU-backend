import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentVh2Controller } from './employment-vh2.controller';
import { EmploymentVh2Repository } from './employment-vh2.repository';
import { EmploymentVh2Service } from './employment-vh2.service';
import { EmploymentVh2Entity } from './entities/employment-vh2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ EmploymentVh2Entity ])],
  providers: [EmploymentVh2Service, EmploymentVh2Repository],
  controllers: [EmploymentVh2Controller],
  exports: [EmploymentVh2Service, EmploymentVh2Repository]
})
export class EmploymentVh2Module {}
