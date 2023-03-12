import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedEmploymentVh1Entity } from './entities/selected-employment-vh1.entity';
import { SelectedEmploymentVh1Service } from './selected-employment-vh1.service';

@Module({
  imports: [TypeOrmModule.forFeature([ SelectedEmploymentVh1Entity ])],
  providers: [SelectedEmploymentVh1Service],
  exports: [SelectedEmploymentVh1Service]
})
export class SelectedEmploymentVh1Module {}
