import { EntityRepository, Repository } from 'typeorm';
import { SelectedPreviousInterventionEntity } from './entities/selected-previous-intervention.entity';

@EntityRepository(SelectedPreviousInterventionEntity)
export class SelectedPreviousInterventionRepository extends Repository<SelectedPreviousInterventionEntity> { }
