import { EntityRepository, Repository } from 'typeorm';
import { ProblemAreaEntity } from './entities/problem-area.entity';

@EntityRepository(ProblemAreaEntity)
export class ProblemAreaRepository extends Repository<ProblemAreaEntity> { }
