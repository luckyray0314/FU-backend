import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEmploymentEntity } from './entities/selected-employment.entity';

@Injectable()
export class SelectedEmploymentService extends TypeOrmCrudService<SelectedEmploymentEntity> {
  constructor(@InjectRepository(SelectedEmploymentEntity) repo: Repository<SelectedEmploymentEntity>) {
    super(repo);
  }

  async create(entity: SelectedEmploymentEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedEmploymentEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
