import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedInterpreterRequiredEntity } from './entities/selected-interpreter-required.entity';

@Injectable()
export class SelectedInterpreterRequiredService extends TypeOrmCrudService<SelectedInterpreterRequiredEntity> {
  constructor(@InjectRepository(SelectedInterpreterRequiredEntity) repo: Repository<SelectedInterpreterRequiredEntity>) {
    super(repo);
  }

  async create(entity: SelectedInterpreterRequiredEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedInterpreterRequiredEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
