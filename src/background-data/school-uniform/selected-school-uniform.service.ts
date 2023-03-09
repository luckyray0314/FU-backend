import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedSchoolUniformEntity } from './entities/selected-school-uniform.entity';

@Injectable()
export class SelectedSchoolUniformService extends TypeOrmCrudService<SelectedSchoolUniformEntity> {
  constructor(@InjectRepository(SelectedSchoolUniformEntity) repo: Repository<SelectedSchoolUniformEntity>) {
    super(repo);
  }

  async create(entity: SelectedSchoolUniformEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedSchoolUniformEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
