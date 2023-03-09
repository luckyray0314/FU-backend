import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedFamilyConstellationEntity } from './entities/selected-family-constellation.entity';

@Injectable()
export class SelectedFamilyConstellationService extends TypeOrmCrudService<SelectedFamilyConstellationEntity> {
  constructor(@InjectRepository(SelectedFamilyConstellationEntity) repo: Repository<SelectedFamilyConstellationEntity>) {
    super(repo);
  }

  async create(entity: SelectedFamilyConstellationEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedFamilyConstellationEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
