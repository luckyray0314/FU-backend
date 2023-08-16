import { EntityRepository, Repository } from 'typeorm';
import { SelectedActionAssignmentEntity } from './entities/selected-action-assignment.entity';

@EntityRepository(SelectedActionAssignmentEntity)
export class SelectedActionAssignmentRepository extends Repository<SelectedActionAssignmentEntity> { }
