import { EntityRepository, Repository } from 'typeorm';
import { EmploymentEntity } from './entities/employment.entity';

@EntityRepository(EmploymentEntity)
export class EmploymentRepository extends Repository<EmploymentEntity> { }
