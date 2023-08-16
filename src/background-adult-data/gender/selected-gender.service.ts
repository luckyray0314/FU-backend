import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedGenderAdultEntity } from './entities/selected-gender.entity';

@Injectable()
export class SelectedGenderAdultService extends TypeOrmCrudService<SelectedGenderAdultEntity> {
  constructor(@InjectRepository(SelectedGenderAdultEntity) repo: Repository<SelectedGenderAdultEntity>) {
    super(repo);
  }

  async create(entity: SelectedGenderAdultEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedGenderAdultEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
