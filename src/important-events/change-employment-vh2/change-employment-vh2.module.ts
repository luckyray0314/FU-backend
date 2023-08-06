
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangeEmploymentVh2Entity } from './entities/change-employment-vh2.entity';
import { ChangeEmploymentVh2Service } from './change-employment-vh2.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChangeEmploymentVh2Entity])],
  providers: [ChangeEmploymentVh2Service],
  exports: [ChangeEmploymentVh2Service]
})
export class ChangeEmploymentVh2Module { }
