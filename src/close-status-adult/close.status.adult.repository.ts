import { EntityRepository, Repository } from 'typeorm';
import { CloseStatusAdultEntity } from './entities/close.status.adult.entity';

@EntityRepository(CloseStatusAdultEntity)
export class CloseStatusAdultRepository extends Repository<CloseStatusAdultEntity> { }
