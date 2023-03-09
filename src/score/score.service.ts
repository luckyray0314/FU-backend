import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ScoreEntity } from './entities/score.entity';

@Injectable()
export class ScoreService extends TypeOrmCrudService<ScoreEntity> {
  constructor(@InjectRepository(ScoreEntity) repo: Repository<ScoreEntity>) {
    super(repo);
  }

  async create(entity: ScoreEntity) {
    return this.repo.insert(entity);
  }

  async update(id: number, entity: ScoreEntity) {
    return this.repo.update(id, entity);
  }
}
