import { EntityRepository, Repository } from 'typeorm';
import { SelectedOtherOngoingEffortEntity } from './entities/selected-other-ongoing-effort.entity';

@EntityRepository(SelectedOtherOngoingEffortEntity)
export class SelectedOtherOngoingEffortRepository extends Repository<SelectedOtherOngoingEffortEntity> { }
