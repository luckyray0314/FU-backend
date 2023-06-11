import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEducationVh2Entity } from './entities/selected-education-vh2.entity';

@Injectable()
export class SelectedEducationVh2Service extends TypeOrmCrudService<SelectedEducationVh2Entity> {
  constructor(@InjectRepository(SelectedEducationVh2Entity) repo: Repository<SelectedEducationVh2Entity>) {
    super(repo);
  }

  async create(entity: SelectedEducationVh2Entity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedEducationVh2Entity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
