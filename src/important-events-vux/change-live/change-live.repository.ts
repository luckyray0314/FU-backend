import { EntityRepository, Repository } from 'typeorm';
import { ChangeLiveEntity } from './entities/change-live.entity';

@EntityRepository(ChangeLiveEntity)
export class ChangeLiveRepository extends Repository<ChangeLiveEntity> { }
