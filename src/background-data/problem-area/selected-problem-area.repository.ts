import { EntityRepository, Repository } from 'typeorm';
import { SelectedProblemAreaEntity } from './entities/selected-problem-area.entity';

@EntityRepository(SelectedProblemAreaEntity)
export class SelectedProblemAreaRepository extends Repository<SelectedProblemAreaEntity> { }
