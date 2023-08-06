import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedChangeEmploymentVh2Entity } from './entities/selected-change-employment-vh2.entity';

@Injectable()
export class SelectedChangeEmploymentVh2Service extends TypeOrmCrudService<SelectedChangeEmploymentVh2Entity> {
  constructor(@InjectRepository(SelectedChangeEmploymentVh2Entity) repo: Repository<SelectedChangeEmploymentVh2Entity>) {
    super(repo);
  }

  async create(entity: SelectedChangeEmploymentVh2Entity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedChangeEmploymentVh2Entity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
