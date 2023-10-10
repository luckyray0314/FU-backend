import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedInvestigationOutEntity } from './entities/selected-investigation-out.entity';

@Injectable()
export class SelectedInvestigationOutService extends TypeOrmCrudService<SelectedInvestigationOutEntity> {
  constructor(@InjectRepository(SelectedInvestigationOutEntity) repo: Repository<SelectedInvestigationOutEntity>) {
    super(repo);
  }

  async create(entity: SelectedInvestigationOutEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedInvestigationOutEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
