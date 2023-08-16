import { EntityRepository, Repository } from 'typeorm';
import { DuringOperationEntity } from './entities/during-operation.entity';

@EntityRepository(DuringOperationEntity)
export class DuringOperationRepository extends Repository<DuringOperationEntity> { }
