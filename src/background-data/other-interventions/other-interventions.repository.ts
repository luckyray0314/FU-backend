import { EntityRepository, Repository } from 'typeorm';
import { OtherInterventionsEntity } from './entities/other-interventions.entity';

@EntityRepository(OtherInterventionsEntity)
export class OtherInterventionsRepository extends Repository<OtherInterventionsEntity> { }
