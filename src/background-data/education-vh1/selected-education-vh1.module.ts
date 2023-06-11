import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedEducationVh1Entity } from './entities/selected-education-vh1.entity';
import { SelectedEducationVh1Service } from './selected-education-vh1.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedEducationVh1Entity])],
  providers: [SelectedEducationVh1Service],
  exports: [SelectedEducationVh1Service]
})
export class SelectedEducationVh1Module { }
