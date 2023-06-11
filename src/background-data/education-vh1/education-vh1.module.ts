import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationVh1Service } from './education-vh1.service';
import { EducationVh1Entity } from './entities/education-vh1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EducationVh1Entity])],
  providers: [EducationVh1Service],
  exports: [EducationVh1Service]
})
export class EducationVh1Module { }
