import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedChangeAccomodationEntity } from './entities/selected-change-accomodation.entity';

@Injectable()
export class SelectedChangeAccomodationService extends TypeOrmCrudService<SelectedChangeAccomodationEntity> {
  constructor(@InjectRepository(SelectedChangeAccomodationEntity) repo: Repository<SelectedChangeAccomodationEntity>) {
    super(repo);
  }

  async create(entity: SelectedChangeAccomodationEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedChangeAccomodationEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
