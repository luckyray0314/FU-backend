import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedChangeEmploymentVh2Entity } from './entities/selected-change-employment-vh2.entity';
import { SelectedChangeEmploymentVh2Service } from './selected-change-employment-vh2.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedChangeEmploymentVh2Entity])],
  providers: [SelectedChangeEmploymentVh2Service],
  exports: [SelectedChangeEmploymentVh2Service]
})
export class SelectedChangeEmploymentVh2Module { }
