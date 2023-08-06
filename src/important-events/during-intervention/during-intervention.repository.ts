import { EntityRepository, Repository } from 'typeorm';
import { DuringInterventionEntity } from './entities/during-intervention.entity';

@EntityRepository(DuringInterventionEntity)
export class DuringInterventionRepository extends Repository<DuringInterventionEntity> { }
