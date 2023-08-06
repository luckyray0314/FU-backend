import { EntityRepository, Repository } from 'typeorm';
import { SelectedDuringInterventionEntity } from './entities/selected-during-intervention.entity';

@EntityRepository(SelectedDuringInterventionEntity)
export class SelectedDuringInterventionRepository extends Repository<SelectedDuringInterventionEntity> { }
