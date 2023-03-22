import { EntityRepository, Repository } from 'typeorm';
import { ReasonForTerminationEntity } from './entities/reason-for-termination.entity';

@EntityRepository(ReasonForTerminationEntity)
export class ReasonForTerminationRepository extends Repository<ReasonForTerminationEntity> {}
