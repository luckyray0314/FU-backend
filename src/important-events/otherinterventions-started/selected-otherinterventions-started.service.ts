import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedOtherInterventionsStartedEntity } from './entities/selected-otherinterventions-started.entity';

@Injectable()
export class SelectedOtherInterventionsStartedService extends TypeOrmCrudService<SelectedOtherInterventionsStartedEntity> {
  constructor(@InjectRepository(SelectedOtherInterventionsStartedEntity) repo: Repository<SelectedOtherInterventionsStartedEntity>) {
    super(repo);
  }

  async create(entity: SelectedOtherInterventionsStartedEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedOtherInterventionsStartedEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
