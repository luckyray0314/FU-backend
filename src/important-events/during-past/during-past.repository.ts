import { EntityRepository, Repository } from 'typeorm';
import { DuringPastEntity } from './entities/during-past.entity';

@EntityRepository(DuringPastEntity)
export class DuringPastRepository extends Repository<DuringPastEntity> { }
