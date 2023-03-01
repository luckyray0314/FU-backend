import { EntityRepository, Repository } from 'typeorm';
import { WhoParticipatesEntity } from './entities/who-participates.entity';

@EntityRepository(WhoParticipatesEntity)
export class WhoParticipatesRepository extends Repository<WhoParticipatesEntity> { }
