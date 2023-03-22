import { EntityRepository, Repository } from 'typeorm';
import { InterventionPeriodEntity } from './entities/intervention-period.entity';

@EntityRepository(InterventionPeriodEntity)
export class InterventionPeriodRepository extends Repository<InterventionPeriodEntity> {}
