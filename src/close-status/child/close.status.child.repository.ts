import { EntityRepository, Repository } from 'typeorm';
import { CloseStatusEntity } from './entities/close.status.child.entity';

@EntityRepository(CloseStatusEntity)
export class CloseStatusRepository extends Repository<CloseStatusEntity> {}
