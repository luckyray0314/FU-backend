import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedChangeOverEntity } from './entities/selected-change-over.entity';

@Injectable()
export class SelectedChangeOverService extends TypeOrmCrudService<SelectedChangeOverEntity> {
  constructor(@InjectRepository(SelectedChangeOverEntity) repo: Repository<SelectedChangeOverEntity>) {
    super(repo);
  }

  async create(entity: SelectedChangeOverEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedChangeOverEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
