import { EntityRepository, Repository } from 'typeorm';
import { SelectedDuringOperationEntity } from './entities/selected-during-operation.entity';

@EntityRepository(SelectedDuringOperationEntity)
export class SelectedDuringOperationRepository extends Repository<SelectedDuringOperationEntity> { }
