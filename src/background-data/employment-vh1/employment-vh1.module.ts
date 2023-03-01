import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentVh1Repository } from './employment-vh1.repository';
import { EmploymentVh1Service } from './employment-vh1.service';
import { EmploymentVh1Entity } from './entities/employment-vh1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ EmploymentVh1Entity ])],
  providers: [EmploymentVh1Service, EmploymentVh1Repository],
  exports: [EmploymentVh1Service, EmploymentVh1Repository]
})
export class EmploymentVh1Module {}
