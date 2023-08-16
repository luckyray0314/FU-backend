import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedFamilyConstellationAdultEntity } from './entities/selected-family-constellation.entity';

@Injectable()
export class SelectedFamilyConstellationAdultService extends TypeOrmCrudService<SelectedFamilyConstellationAdultEntity> {
  constructor(@InjectRepository(SelectedFamilyConstellationAdultEntity) repo: Repository<SelectedFamilyConstellationAdultEntity>) {
    super(repo);
  }

  async create(entity: SelectedFamilyConstellationAdultEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedFamilyConstellationAdultEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
