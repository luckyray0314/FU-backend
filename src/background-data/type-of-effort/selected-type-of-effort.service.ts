import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedTypeOfEffortEntity } from './entities/selected-type-of-effort.entity';

@Injectable()
export class SelectedTypeOfEffortService extends TypeOrmCrudService<SelectedTypeOfEffortEntity> {
  constructor(@InjectRepository(SelectedTypeOfEffortEntity) repo: Repository<SelectedTypeOfEffortEntity>) {
    super(repo);
  }

  async create(entity: SelectedTypeOfEffortEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedTypeOfEffortEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
