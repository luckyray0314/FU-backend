import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedChangeEmploymentVh1Entity } from './entities/selected-change-employment-vh1.entity';

@Injectable()
export class SelectedChangeEmploymentVh1Service extends TypeOrmCrudService<SelectedChangeEmploymentVh1Entity> {
  constructor(@InjectRepository(SelectedChangeEmploymentVh1Entity) repo: Repository<SelectedChangeEmploymentVh1Entity>) {
    super(repo);
  }

  async create(entity: SelectedChangeEmploymentVh1Entity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedChangeEmploymentVh1Entity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
