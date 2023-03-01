import { EntityRepository, Repository } from 'typeorm';
import { PreviousInterventionEntity } from './entities/previous-intervention.entity';

@EntityRepository(PreviousInterventionEntity)
export class PreviousInterventionRepository extends Repository<PreviousInterventionEntity> { }
