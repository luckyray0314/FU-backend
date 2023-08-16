import { EntityRepository, Repository } from 'typeorm';
import { SelectedProblemAreaAdultEntity } from './entities/selected-problem-area.entity';

@EntityRepository(SelectedProblemAreaAdultEntity)
export class SelectedProblemAreaAdultRepository extends Repository<SelectedProblemAreaAdultEntity> { }
