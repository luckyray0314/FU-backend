import { EntityRepository, Repository } from 'typeorm';
import { SelectedDuringPastEntity } from './entities/selected-during-past.entity';

@EntityRepository(SelectedDuringPastEntity)
export class SelectedDuringPastRepository extends Repository<SelectedDuringPastEntity> { }
