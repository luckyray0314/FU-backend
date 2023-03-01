import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationVh2Controller } from './education-vh2.controller';
import { EducationVh2Repository } from './education-vh2.repository';
import { EducationVh2Service } from './education-vh2.service';
import { EducationVh2Entity } from './entities/education-vh2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ EducationVh2Entity ])],
  providers: [EducationVh2Service, EducationVh2Repository],
  controllers: [EducationVh2Controller],
  exports: [EducationVh2Service, EducationVh2Repository]
})
export class EducationVh2Module {}
