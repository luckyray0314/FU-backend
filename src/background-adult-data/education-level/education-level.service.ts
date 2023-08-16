import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EducationLevelEntity } from './entities/education-level.entity';

@Injectable()
export class EducationLevelService extends TypeOrmCrudService<EducationLevelEntity> {
  constructor(@InjectRepository(EducationLevelEntity) repo: Repository<EducationLevelEntity>) {
    super(repo);
  }
}
