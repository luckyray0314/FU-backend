import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedReasonForTerminationEntity } from './entities/selected-reason-for-termination.entity';

@Injectable()
export class SelectedReasonForTerminationService extends TypeOrmCrudService<SelectedReasonForTerminationEntity> {
  constructor(@InjectRepository(SelectedReasonForTerminationEntity) repo: Repository<SelectedReasonForTerminationEntity>) {
    super(repo);
  }

  async create(entity: SelectedReasonForTerminationEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedReasonForTerminationEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
