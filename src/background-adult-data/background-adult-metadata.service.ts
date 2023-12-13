import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { BackgroundAdultMetadataEntity } from './background-adult-metadata.entity';

@Injectable()
export class BackgroundAdultMetadataService extends TypeOrmCrudService<BackgroundAdultMetadataEntity> {
  constructor(
    @InjectRepository(BackgroundAdultMetadataEntity)
    repo: Repository<BackgroundAdultMetadataEntity>,
  ) {
    super(repo);
  }

  async create(entity: BackgroundAdultMetadataEntity) {
    return this.repo.save(entity);
  }

  async update(entity: BackgroundAdultMetadataEntity) {
    return this.repo.update(entity.codeNumber, entity);
  }

  async findAll() {
    return this.repo
      .createQueryBuilder('background_adult_metadata_entity')
      .select('background_adult_metadata_entity.codeNumber', 'codeNumber')
      .addSelect('background_adult_metadata_entity.date', 'date')
      .addSelect('background_adult_metadata_entity.country', 'country')
      .addSelect('close-status-adult.processor', 'processor')
      .addSelect('close-status-adult.isClosed', 'isClosed')
      .innerJoin(
        'close-status-adult',
        'close-status-adult',
        'background_adult_metadata_entity.codeNumber = close-status-adult.codeNumber',
      )
      .getRawMany();
  }
}
