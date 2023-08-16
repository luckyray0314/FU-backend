import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedActionAssignmentEntity } from './entities/selected-action-assignment.entity';

@Injectable()
export class SelectedActionAssignmentService extends TypeOrmCrudService<SelectedActionAssignmentEntity> {
  constructor(@InjectRepository(SelectedActionAssignmentEntity) repo: Repository<SelectedActionAssignmentEntity>) {
    super(repo);
  }

  async create(entity: SelectedActionAssignmentEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedActionAssignmentEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
