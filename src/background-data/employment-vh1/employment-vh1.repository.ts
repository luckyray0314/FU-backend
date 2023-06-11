import { EntityRepository, Repository } from 'typeorm';
import { EmploymentVh1Entity } from './entities/employment-vh1.entity';

@EntityRepository(EmploymentVh1Entity)
export class EmploymentVh1Repository extends Repository<EmploymentVh1Entity> {}
