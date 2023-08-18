import { EntityRepository, Repository } from 'typeorm';
import { AdultScoreEntity } from './entities/adult-score.entity';

@EntityRepository(AdultScoreEntity)
export class AdultScoreRepository extends Repository<AdultScoreEntity> { }
