import { EntityRepository, Repository } from 'typeorm';
import { FollowUpMetadataEntity } from './follow-up-metadata.entity';

@EntityRepository(FollowUpMetadataEntity)
export class FollowUpMetadataRepository extends Repository<FollowUpMetadataEntity> { }
