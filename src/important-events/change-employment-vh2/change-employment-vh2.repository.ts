import { EntityRepository, Repository } from 'typeorm';
import { ChangeEmploymentVh2Entity } from './entities/change-employment-vh2.entity';

@EntityRepository(ChangeEmploymentVh2Entity)
export class ChangeEmploymentVh2Repository extends Repository<ChangeEmploymentVh2Entity> { }
