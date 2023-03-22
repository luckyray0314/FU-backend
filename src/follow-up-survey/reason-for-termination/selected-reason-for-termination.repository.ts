import { EntityRepository, Repository } from 'typeorm';
import { SelectedReasonForTerminationEntity } from './entities/selected-reason-for-termination.entity';

@EntityRepository(SelectedReasonForTerminationEntity)
export class SelectedReasonForTerminationRepository extends Repository<SelectedReasonForTerminationEntity> {}
