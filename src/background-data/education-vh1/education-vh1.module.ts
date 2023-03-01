import { Module } from '@nestjs/common';
import { EducationVh1Service } from './education-vh1.service';
import { EducationVh1Controller } from './education-vh1.controller';

@Module({
  controllers: [EducationVh1Controller],
  providers: [EducationVh1Service]
})
export class EducationVh1Module {}
