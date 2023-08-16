import { EntityRepository, Repository } from 'typeorm';
import { BackgroundAdultMetadataEntity } from './background-adult-metadata.entity';

@EntityRepository(BackgroundAdultMetadataEntity)
export class BackgroundAdultMetadataRepository extends Repository<BackgroundAdultMetadataEntity> { }
