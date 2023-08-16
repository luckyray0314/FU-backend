import { EntityRepository, Repository } from 'typeorm';
import { PreviousEffortEntity } from './entities/previous-effort.entity';

@EntityRepository(PreviousEffortEntity)
export class PreviousEffortRepository extends Repository<PreviousEffortEntity> { }
