import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedGenderEntity } from './entities/selected-gender.entity';

@Injectable()
export class SelectedGenderService extends TypeOrmCrudService<SelectedGenderEntity> {
  constructor(@InjectRepository(SelectedGenderEntity) repo: Repository<SelectedGenderEntity>) {
    super(repo);
  }

  async create(entity: SelectedGenderEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedGenderEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
