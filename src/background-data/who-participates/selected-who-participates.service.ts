import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedWhoParticipatesEntity } from './entities/selected-who-participates.entity';

@Injectable()
export class SelectedWhoParticipatesService extends TypeOrmCrudService<SelectedWhoParticipatesEntity> {
  constructor(@InjectRepository(SelectedWhoParticipatesEntity) repo: Repository<SelectedWhoParticipatesEntity>) {
    super(repo);
  }

  async create(entity: SelectedWhoParticipatesEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedWhoParticipatesEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
