import { Module } from '@nestjs/common';
import { EmploymentVh2Service } from './employment-vh2.service';
import { EmploymentVh2Controller } from './employment-vh2.controller';

@Module({
  controllers: [EmploymentVh2Controller],
  providers: [EmploymentVh2Service]
})
export class EmploymentVh2Module {}
