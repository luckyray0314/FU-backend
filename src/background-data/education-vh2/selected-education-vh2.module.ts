import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedEducationVh2Entity } from './entities/selected-education-vh2.entity';
import { SelectedEducationVh2Service } from './selected-education-vh2.service';

@Module({
  imports: [TypeOrmModule.forFeature([ SelectedEducationVh2Entity ])],
  providers: [SelectedEducationVh2Service],
  exports: [SelectedEducationVh2Service]
})
export class SelectedEducationVh2Module {}
