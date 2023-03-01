import { EntityRepository, Repository } from 'typeorm';
import { ReasonForUpdateEntity } from './entities/reason-for-update.entity';

@EntityRepository(ReasonForUpdateEntity)
export class ReasonForUpdateRepository extends Repository<ReasonForUpdateEntity> { }
