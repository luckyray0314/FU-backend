import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedPreviousEffortEntity } from './entities/selected-previous-effort.entity';

@Injectable()
export class SelectedPreviousEffortService extends TypeOrmCrudService<SelectedPreviousEffortEntity> {
  constructor(@InjectRepository(SelectedPreviousEffortEntity) repo: Repository<SelectedPreviousEffortEntity>) {
    super(repo);
  }

  async create(entity: SelectedPreviousEffortEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedPreviousEffortEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
