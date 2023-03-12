import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentVh2Service } from './employment-vh2.service';
import { EmploymentVh2Entity } from './entities/employment-vh2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmploymentVh2Entity])],
  providers: [EmploymentVh2Service],
  exports: [EmploymentVh2Service]
})
export class EmploymentVh2Module { }
