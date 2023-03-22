import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { FollowUpMetadataEntity } from './follow-up-metadata.entity';

@Injectable()
export class FollowUpMetadataService extends TypeOrmCrudService<FollowUpMetadataEntity> {
  constructor(@InjectRepository(FollowUpMetadataEntity) repo: Repository<FollowUpMetadataEntity>) {
    super(repo);
  }

  async create(entity: FollowUpMetadataEntity) {
    return this.repo.save(entity);
  }

  async update(entity: FollowUpMetadataEntity) {
    return this.repo.update(entity.codeNumber, entity);
  }
}
