import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedInterventionPeriodEntity } from './entities/selected-intervention-period.entity';

@Injectable()
export class SelectedInterventionPeriodService extends TypeOrmCrudService<SelectedInterventionPeriodEntity> {
  constructor(@InjectRepository(SelectedInterventionPeriodEntity) repo: Repository<SelectedInterventionPeriodEntity>) {
    super(repo);
  }

  async create(entity: SelectedInterventionPeriodEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedInterventionPeriodEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
