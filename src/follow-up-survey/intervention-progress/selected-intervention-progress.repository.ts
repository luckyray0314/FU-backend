import { EntityRepository, Repository } from 'typeorm';
import { SelectedInterventionProgressEntity } from './entities/selected-intervention-progress.entity';

@EntityRepository(SelectedInterventionProgressEntity)
export class SelectedInterventionProgressRepository extends Repository<SelectedInterventionProgressEntity> {}
