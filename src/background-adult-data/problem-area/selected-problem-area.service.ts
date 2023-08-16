import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedProblemAreaAdultEntity } from './entities/selected-problem-area.entity';

@Injectable()
export class SelectedProblemAreaAdultService extends TypeOrmCrudService<SelectedProblemAreaAdultEntity> {
  constructor(@InjectRepository(SelectedProblemAreaAdultEntity) repo: Repository<SelectedProblemAreaAdultEntity>) {
    super(repo);
  }

  async create(entity: SelectedProblemAreaAdultEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedProblemAreaAdultEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
