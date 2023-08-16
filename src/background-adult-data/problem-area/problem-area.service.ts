import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ProblemAreaAdultEntity } from './entities/problem-area.entity';

@Injectable()
export class ProblemAreaAdultService extends TypeOrmCrudService<ProblemAreaAdultEntity> {
  constructor(@InjectRepository(ProblemAreaAdultEntity) repo: Repository<ProblemAreaAdultEntity>) {
    super(repo);
  }
}
