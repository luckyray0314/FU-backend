import { EntityRepository, Repository } from 'typeorm';
import { SelectedPreviousEffortEntity } from './entities/selected-previous-effort.entity';

@EntityRepository(SelectedPreviousEffortEntity)
export class SelectedPreviousEffortRepository extends Repository<SelectedPreviousEffortEntity> { }
