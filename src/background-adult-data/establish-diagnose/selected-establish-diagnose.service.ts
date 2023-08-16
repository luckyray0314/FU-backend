import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEstablishDiagnoseEntity } from './entities/selected-establish-diagnose.entity';

@Injectable()
export class SelectedEstablishDiagnoseService extends TypeOrmCrudService<SelectedEstablishDiagnoseEntity> {
  constructor(@InjectRepository(SelectedEstablishDiagnoseEntity) repo: Repository<SelectedEstablishDiagnoseEntity>) {
    super(repo);
  }

  async create(entity: SelectedEstablishDiagnoseEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedEstablishDiagnoseEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
