import { EntityRepository, Repository } from 'typeorm';
import { ChangeOverEntity } from './entities/change-over.entity';

@EntityRepository(ChangeOverEntity)
export class ChangeOverRepository extends Repository<ChangeOverEntity> { }
