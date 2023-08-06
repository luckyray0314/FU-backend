import { EntityRepository, Repository } from 'typeorm';
import { OtherInterventionsStartedEntity } from './entities/otherinterventions-started.entity';

@EntityRepository(OtherInterventionsStartedEntity)
export class OtherInterventionsStartedRepository extends Repository<OtherInterventionsStartedEntity> { }
