import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentVh1Service } from './employment-vh1.service';
import { EmploymentVh1Entity } from './entities/employment-vh1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ EmploymentVh1Entity ])],
  providers: [EmploymentVh1Service],
  exports: [EmploymentVh1Service]
})
export class EmploymentVh1Module {}
