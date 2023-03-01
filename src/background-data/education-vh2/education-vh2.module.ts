import { Module } from '@nestjs/common';
import { EducationVh2Service } from './education-vh2.service';
import { EducationVh2Controller } from './education-vh2.controller';

@Module({
  controllers: [EducationVh2Controller],
  providers: [EducationVh2Service]
})
export class EducationVh2Module {}
