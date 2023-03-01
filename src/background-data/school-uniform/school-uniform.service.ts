import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SchoolUniformEntity } from './entities/school-uniform.entity';

@Injectable()
export class SchoolUniformService extends TypeOrmCrudService<SchoolUniformEntity> {
  constructor(@InjectRepository(SchoolUniformEntity) repo: Repository<SchoolUniformEntity>) {
    super(repo);
  }
}
