import { EntityRepository, Repository } from 'typeorm';
import { InterventionProgressEntity } from './entities/intervention-progress.entity';

@EntityRepository(InterventionProgressEntity)
export class InterventionProgressRepository extends Repository<InterventionProgressEntity> {}
