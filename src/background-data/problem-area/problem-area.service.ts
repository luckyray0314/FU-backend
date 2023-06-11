import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ProblemAreaEntity } from './entities/problem-area.entity';

@Injectable()
export class ProblemAreaService extends TypeOrmCrudService<ProblemAreaEntity> {
  constructor(@InjectRepository(ProblemAreaEntity) repo: Repository<ProblemAreaEntity>) {
    super(repo);
  }
}
