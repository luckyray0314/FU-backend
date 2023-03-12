import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedEmploymentVh2Entity } from './entities/selected-employment-vh2.entity';
import { SelectedEmploymentVh2Service } from './selected-employment-vh2.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedEmploymentVh2Entity])],
  providers: [SelectedEmploymentVh2Service],
  exports: [SelectedEmploymentVh2Service]
})
export class SelectedEmploymentVh2Module { }
