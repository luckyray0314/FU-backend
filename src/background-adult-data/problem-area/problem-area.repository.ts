import { EntityRepository, Repository } from 'typeorm';
import { ProblemAreaAdultEntity } from './entities/problem-area.entity';

@EntityRepository(ProblemAreaAdultEntity)
export class ProblemAreaAdultRepository extends Repository<ProblemAreaAdultEntity> { }
