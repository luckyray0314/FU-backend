
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangeEmploymentVh1Entity } from './entities/change-employment-vh1.entity';
import { ChangeEmploymentVh1Service } from './change-employment-vh1.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChangeEmploymentVh1Entity])],
  providers: [ChangeEmploymentVh1Service],
  exports: [ChangeEmploymentVh1Service]
})
export class ChangeEmploymentVh1Module { }
