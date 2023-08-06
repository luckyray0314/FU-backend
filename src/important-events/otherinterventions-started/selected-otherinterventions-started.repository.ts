import { EntityRepository, Repository } from 'typeorm';
import { SelectedOtherInterventionsStartedEntity } from './entities/selected-otherinterventions-started.entity';

@EntityRepository(SelectedOtherInterventionsStartedEntity)
export class SelectedOtherInterventionsStartedRepository extends Repository<SelectedOtherInterventionsStartedEntity> { }

