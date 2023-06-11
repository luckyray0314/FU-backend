import { EntityRepository, Repository } from 'typeorm';
import { ScoreEntity } from './entities/score.entity';

@EntityRepository(ScoreEntity)
export class ScoreRepository extends Repository<ScoreEntity> { }
