import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEducationVh1Entity } from './entities/selected-education-vh1.entity';

@Injectable()
export class SelectedEducationVh1Service extends TypeOrmCrudService<SelectedEducationVh1Entity> {
  constructor(@InjectRepository(SelectedEducationVh1Entity) repo: Repository<SelectedEducationVh1Entity>) {
    super(repo);
  }

  async create(entity: SelectedEducationVh1Entity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedEducationVh1Entity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
