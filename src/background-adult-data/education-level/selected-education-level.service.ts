import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEducationLevelEntity } from './entities/selected-education-level.entity';

@Injectable()
export class SelectedEducationLevelService extends TypeOrmCrudService<SelectedEducationLevelEntity> {
  constructor(@InjectRepository(SelectedEducationLevelEntity) repo: Repository<SelectedEducationLevelEntity>) {
    super(repo);
  }

  async create(entity: SelectedEducationLevelEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedEducationLevelEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
