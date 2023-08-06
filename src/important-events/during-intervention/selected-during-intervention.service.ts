import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedDuringInterventionEntity } from './entities/selected-during-intervention.entity';

@Injectable()
export class SelectedDuringInterventionService extends TypeOrmCrudService<SelectedDuringInterventionEntity> {
  constructor(@InjectRepository(SelectedDuringInterventionEntity) repo: Repository<SelectedDuringInterventionEntity>) {
    super(repo);
  }

  async create(entity: SelectedDuringInterventionEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedDuringInterventionEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
