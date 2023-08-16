import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedOtherOngoingEffortEntity } from './entities/selected-other-ongoing-effort.entity';

@Injectable()
export class SelectedOtherOngoingEffortService extends TypeOrmCrudService<SelectedOtherOngoingEffortEntity> {
  constructor(@InjectRepository(SelectedOtherOngoingEffortEntity) repo: Repository<SelectedOtherOngoingEffortEntity>) {
    super(repo);
  }

  async create(entity: SelectedOtherOngoingEffortEntity) {
    return this.repo.insert(entity);
  }

  async update(entity: SelectedOtherOngoingEffortEntity) {
    return this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return this.repo.delete({ codeNumber });
  }
}
