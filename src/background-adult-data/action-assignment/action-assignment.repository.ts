import { EntityRepository, Repository } from 'typeorm';
import { ActionAssignmentEntity } from './entities/action-assignment.entity';

@EntityRepository(ActionAssignmentEntity)
export class ActionAssignmentRepository extends Repository<ActionAssignmentEntity> { }
