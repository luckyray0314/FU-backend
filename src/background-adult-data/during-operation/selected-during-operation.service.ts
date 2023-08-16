import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedDuringOperationEntity } from './entities/selected-during-operation.entity';

@Injectable()
export class SelectedDuringOperationService extends TypeOrmCrudService<SelectedDuringOperationEntity> {
  constructor(@InjectRepository(SelectedDuringOperationEntity) repo: Repository<SelectedDuringOperationEntity>) {
    super(repo);
  }

  async create(entity: SelectedDuringOperationEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedDuringOperationEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
