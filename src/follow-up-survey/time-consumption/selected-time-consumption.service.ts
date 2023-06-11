import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedTimeConsumptionEntity } from './entities/selected-time-consumption.entity';

@Injectable()
export class SelectedTimeConsumptionService extends TypeOrmCrudService<SelectedTimeConsumptionEntity> {
  constructor(@InjectRepository(SelectedTimeConsumptionEntity) repo: Repository<SelectedTimeConsumptionEntity>) {
    super(repo);
  }

  async create(entity: SelectedTimeConsumptionEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedTimeConsumptionEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
