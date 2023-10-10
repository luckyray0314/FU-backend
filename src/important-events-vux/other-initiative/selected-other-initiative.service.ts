import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedOtherInitiativeEntity } from './entities/selected-other-initiative.entity';

@Injectable()
export class SelectedOtherInitiativeService extends TypeOrmCrudService<SelectedOtherInitiativeEntity> {
  constructor(@InjectRepository(SelectedOtherInitiativeEntity) repo: Repository<SelectedOtherInitiativeEntity>) {
    super(repo);
  }

  async create(entity: SelectedOtherInitiativeEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedOtherInitiativeEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
