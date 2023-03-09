import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEmploymentVh2Entity } from './entities/selected-employment-vh2.entity';

@Injectable()
export class SelectedEmploymentVh2Service extends TypeOrmCrudService<SelectedEmploymentVh2Entity> {
  constructor(@InjectRepository(SelectedEmploymentVh2Entity) repo: Repository<SelectedEmploymentVh2Entity>) {
    super(repo);
  }

  async create(entity: SelectedEmploymentVh2Entity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedEmploymentVh2Entity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
