import { EntityRepository, Repository } from 'typeorm';
import { SelectedOtherInitiativeEntity } from './entities/selected-other-initiative.entity';

@EntityRepository(SelectedOtherInitiativeEntity)
export class SelectedOtherInitiativeRepository extends Repository<SelectedOtherInitiativeEntity> { }

