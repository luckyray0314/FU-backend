import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedInterventionProgressEntity } from './entities/selected-intervention-progress.entity';

@Injectable()
export class SelectedInterventionProgressService extends TypeOrmCrudService<SelectedInterventionProgressEntity> {
  constructor(@InjectRepository(SelectedInterventionProgressEntity) repo: Repository<SelectedInterventionProgressEntity>) {
    super(repo);
  }

  async create(entity: SelectedInterventionProgressEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedInterventionProgressEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
