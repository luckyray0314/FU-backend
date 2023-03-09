import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEstablishedDiagnosesEntity } from './entities/selected-established-diagnoses.entity';

@Injectable()
export class SelectedEstablishedDiagnosesService extends TypeOrmCrudService<SelectedEstablishedDiagnosesEntity> {
  constructor(@InjectRepository(SelectedEstablishedDiagnosesEntity) repo: Repository<SelectedEstablishedDiagnosesEntity>) {
    super(repo);
  }

  async create(entity: SelectedEstablishedDiagnosesEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedEstablishedDiagnosesEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
