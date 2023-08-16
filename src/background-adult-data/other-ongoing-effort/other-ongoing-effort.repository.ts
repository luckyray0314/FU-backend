import { EntityRepository, Repository } from 'typeorm';
import { OtherOngoingEffortEntity } from './entities/other-ongoing-effort.entity';

@EntityRepository(OtherOngoingEffortEntity)
export class OtherOngoingEffortRepository extends Repository<OtherOngoingEffortEntity> { }
