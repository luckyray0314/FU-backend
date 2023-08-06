import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedChildSchoolEntity } from './entities/selected-child-school.entity';

@Injectable()
export class SelectedChildSchoolService extends TypeOrmCrudService<SelectedChildSchoolEntity> {
  constructor(@InjectRepository(SelectedChildSchoolEntity) repo: Repository<SelectedChildSchoolEntity>) {
    super(repo);
  }

  async create(entity: SelectedChildSchoolEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedChildSchoolEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
