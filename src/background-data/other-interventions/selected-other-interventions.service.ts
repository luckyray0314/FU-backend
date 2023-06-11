import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedOtherInterventionsEntity } from './entities/selected-other-interventions.entity';

@Injectable()
export class SelectedOtherInterventionsService extends TypeOrmCrudService<SelectedOtherInterventionsEntity> {
  constructor(@InjectRepository(SelectedOtherInterventionsEntity) repo: Repository<SelectedOtherInterventionsEntity>) {
    super(repo);
  }

  async create(entity: SelectedOtherInterventionsEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedOtherInterventionsEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
