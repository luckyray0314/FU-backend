import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedChangeEmploymentVh1Entity } from './entities/selected-change-employment-vh1.entity';
import { SelectedChangeEmploymentVh1Service } from './selected-change-employment-vh1.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedChangeEmploymentVh1Entity])],
  providers: [SelectedChangeEmploymentVh1Service],
  exports: [SelectedChangeEmploymentVh1Service]
})
export class SelectedChangeEmploymentVh1Module { }
