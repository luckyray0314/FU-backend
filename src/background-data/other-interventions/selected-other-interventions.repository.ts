import { EntityRepository, Repository } from 'typeorm';
import { SelectedOtherInterventionsEntity } from './entities/selected-other-interventions.entity';

@EntityRepository(SelectedOtherInterventionsEntity)
export class SelectedOtherInterventionsRepository extends Repository<SelectedOtherInterventionsEntity> { }
