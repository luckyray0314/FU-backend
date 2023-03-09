import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedProblemAreaEntity } from './entities/selected-problem-area.entity';

@Injectable()
export class SelectedProblemAreaService extends TypeOrmCrudService<SelectedProblemAreaEntity> {
  constructor(@InjectRepository(SelectedProblemAreaEntity) repo: Repository<SelectedProblemAreaEntity>) {
    super(repo);
  }

  async create(entity: SelectedProblemAreaEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedProblemAreaEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
