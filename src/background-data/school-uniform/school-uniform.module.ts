import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolUniformEntity } from './entities/school-uniform.entity';
import { SchoolUniformService } from './school-uniform.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolUniformEntity])],
  providers: [SchoolUniformService],
  exports: [SchoolUniformService]
})
export class SchoolUniformModule { }
