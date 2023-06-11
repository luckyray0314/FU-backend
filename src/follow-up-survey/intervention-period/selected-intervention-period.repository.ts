import { EntityRepository, Repository } from 'typeorm';
import { SelectedInterventionPeriodEntity } from './entities/selected-intervention-period.entity';

@EntityRepository(SelectedInterventionPeriodEntity)
export class SelectedInterventionPeriodRepository extends Repository<SelectedInterventionPeriodEntity> {}
