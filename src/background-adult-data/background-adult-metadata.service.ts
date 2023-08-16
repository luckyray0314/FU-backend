import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { BackgroundAdultMetadataEntity } from './background-adult-metadata.entity';

@Injectable()
export class BackgroundAdultMetadataService extends TypeOrmCrudService<BackgroundAdultMetadataEntity> {
  constructor(@InjectRepository(BackgroundAdultMetadataEntity) repo: Repository<BackgroundAdultMetadataEntity>) {
    super(repo);
  }

  async create(entity: BackgroundAdultMetadataEntity) {
    return this.repo.save(entity);
  }

  async update(entity: BackgroundAdultMetadataEntity) {
    return this.repo.update(entity.codeNumber, entity);
  }
}
