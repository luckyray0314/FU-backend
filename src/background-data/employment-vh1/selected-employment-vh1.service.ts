import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEmploymentVh1Entity } from './entities/selected-employment-vh1.entity';

@Injectable()
export class SelectedEmploymentVh1Service extends TypeOrmCrudService<SelectedEmploymentVh1Entity> {
  constructor(@InjectRepository(SelectedEmploymentVh1Entity) repo: Repository<SelectedEmploymentVh1Entity>) {
    super(repo);
  }

  async create(entity: SelectedEmploymentVh1Entity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedEmploymentVh1Entity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
