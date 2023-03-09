import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { BackgroundMetadataEntity } from './background-metadata.entity';

@Injectable()
export class BackgroundMetadataService extends TypeOrmCrudService<BackgroundMetadataEntity> {
  constructor(@InjectRepository(BackgroundMetadataEntity) repo: Repository<BackgroundMetadataEntity>) {
    super(repo);
  }

  async create(entity: BackgroundMetadataEntity) {
    return this.repo.save(entity);
  }

  async update(entity: BackgroundMetadataEntity) {
    return this.repo.update(entity.codeNumber, entity);
  }
}
