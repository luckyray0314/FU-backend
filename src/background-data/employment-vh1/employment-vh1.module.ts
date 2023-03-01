import { Module } from '@nestjs/common';
import { EmploymentVh1Service } from './employment-vh1.service';
import { EmploymentVh1Controller } from './employment-vh1.controller';

@Module({
  controllers: [EmploymentVh1Controller],
  providers: [EmploymentVh1Service]
})
export class EmploymentVh1Module {}
