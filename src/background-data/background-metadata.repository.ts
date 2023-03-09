import { EntityRepository, Repository } from 'typeorm';
import { BackgroundMetadataEntity } from './background-metadata.entity';

@EntityRepository(BackgroundMetadataEntity)
export class BackgroundMetadataRepository extends Repository<BackgroundMetadataEntity> { }
