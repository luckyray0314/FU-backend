import { EntityRepository, Repository } from 'typeorm';
import { SelectedEmploymentEntity } from './entities/selected-employment.entity';

@EntityRepository(SelectedEmploymentEntity)
export class SelectedEmploymentRepository extends Repository<SelectedEmploymentEntity> { }
