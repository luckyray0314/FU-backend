import { EntityRepository, Repository } from 'typeorm';
import { SelectedReasonForUpdateEntity } from './entities/selected-reason-for-update.entity';

@EntityRepository(SelectedReasonForUpdateEntity)
export class SelectedReasonForUpdateRepository extends Repository<SelectedReasonForUpdateEntity> { }
