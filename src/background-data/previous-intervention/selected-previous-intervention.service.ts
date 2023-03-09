import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedPreviousInterventionEntity } from './entities/selected-previous-intervention.entity';

@Injectable()
export class SelectedPreviousInterventionService extends TypeOrmCrudService<SelectedPreviousInterventionEntity> {
  constructor(@InjectRepository(SelectedPreviousInterventionEntity) repo: Repository<SelectedPreviousInterventionEntity>) {
    super(repo);
  }

  async create(entity: SelectedPreviousInterventionEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedPreviousInterventionEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
