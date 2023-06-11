import { EntityRepository, Repository } from 'typeorm';
import { EmploymentVh2Entity } from './entities/employment-vh2.entity';

@EntityRepository(EmploymentVh2Entity)
export class EmploymentVh2Repository extends Repository<EmploymentVh2Entity> {}
