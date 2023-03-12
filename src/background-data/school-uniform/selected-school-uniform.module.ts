import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedSchoolUniformEntity } from './entities/selected-school-uniform.entity';
import { SelectedSchoolUniformService } from './selected-school-uniform.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedSchoolUniformEntity])],
  providers: [SelectedSchoolUniformService],
  exports: [SelectedSchoolUniformService]
})
export class SelectedSchoolUniformModule { }
