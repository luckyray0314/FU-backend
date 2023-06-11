import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedReasonForUpdateEntity } from './entities/selected-reason-for-update.entity';

@Injectable()
export class SelectedReasonForUpdateService extends TypeOrmCrudService<SelectedReasonForUpdateEntity> {
  constructor(@InjectRepository(SelectedReasonForUpdateEntity) repo: Repository<SelectedReasonForUpdateEntity>) {
    super(repo);
  }

  async create(entity: SelectedReasonForUpdateEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedReasonForUpdateEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
