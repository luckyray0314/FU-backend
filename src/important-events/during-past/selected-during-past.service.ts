import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedDuringPastEntity } from './entities/selected-during-past.entity';

@Injectable()
export class SelectedDuringPastService extends TypeOrmCrudService<SelectedDuringPastEntity> {
  constructor(@InjectRepository(SelectedDuringPastEntity) repo: Repository<SelectedDuringPastEntity>) {
    super(repo);
  }

  async create(entity: SelectedDuringPastEntity) {
    return await this.repo.insert(entity);
  }

  async update(entity: SelectedDuringPastEntity) {
    return await this.repo.update(entity.id, entity);
  }

  async deleteByCodeNumber(codeNumber: string) {
    return await this.repo.delete({ codeNumber });
  }
}
