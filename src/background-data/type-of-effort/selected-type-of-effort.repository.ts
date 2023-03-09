import { EntityRepository, Repository } from 'typeorm';
import { SelectedTypeOfEffortEntity } from './entities/selected-type-of-effort.entity';

@EntityRepository(SelectedTypeOfEffortEntity)
export class SelectedTypeOfEffortRepository extends Repository<SelectedTypeOfEffortEntity> { }
