import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolUniformEntity } from './entities/school-uniform.entity';
import { SchoolUniformRepository } from './school-uniform.repository';
import { SchoolUniformService } from './school-uniform.service';

@Module({
  imports: [TypeOrmModule.forFeature([ SchoolUniformEntity ])],
  providers: [SchoolUniformService, SchoolUniformRepository],
  exports: [SchoolUniformService, SchoolUniformRepository]
})
export class SchoolUniformModule {}
