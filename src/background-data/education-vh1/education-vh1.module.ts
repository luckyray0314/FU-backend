import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationVh1Repository } from './education-vh1.repository';
import { EducationVh1Service } from './education-vh1.service';
import { EducationVh1Entity } from './entities/education-vh1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ EducationVh1Entity ])],
  providers: [EducationVh1Service, EducationVh1Repository],
  exports: [EducationVh1Service, EducationVh1Repository]
})
export class EducationVh1Module {}
