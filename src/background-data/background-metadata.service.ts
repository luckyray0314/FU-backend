import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { BackgroundMetadataEntity } from './background-metadata.entity';

@Injectable()
export class BackgroundMetadataService extends TypeOrmCrudService<BackgroundMetadataEntity> {
  constructor(
    @InjectRepository(BackgroundMetadataEntity)
    repo: Repository<BackgroundMetadataEntity>,
  ) {
    super(repo);
  }

  async create(entity: BackgroundMetadataEntity) {
    return this.repo.save(entity);
  }

  async update(entity: BackgroundMetadataEntity) {
    return this.repo.update(entity.codeNumber, entity);
  }

  async findAll() {
    return this.repo
      .createQueryBuilder('background_metadata_entity')
      .select('background_metadata_entity.codeNumber', 'codeNumber')
      .addSelect('background_metadata_entity.date', 'date')
      .addSelect('background_metadata_entity.country', 'country')
      /* .where(
        `date_part('year', current_date :: DATE) - date_part('year', background_metadata_entity.date :: DATE) <= 1`,
      ) */
      .orderBy('background_metadata_entity.date', 'DESC')
      .getRawMany();
  }
}
