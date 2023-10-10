import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedChangeLiveEntity } from './entities/selected-change-live.entity';

@Injectable()
export class SelectedChangeLiveService extends TypeOrmCrudService<SelectedChangeLiveEntity> {
  constructor(@InjectRepository(SelectedChangeLiveEntity) repo: Repository<SelectedChangeLiveEntity>) {
    super(repo);
  }

  async create(entity: SelectedChangeLiveEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedChangeLiveEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
