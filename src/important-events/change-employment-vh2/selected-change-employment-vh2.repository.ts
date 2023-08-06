import { EntityRepository, Repository } from 'typeorm';
import { SelectedChangeEmploymentVh2Entity } from './entities/selected-change-employment-vh2.entity';

@EntityRepository(SelectedChangeEmploymentVh2Entity)
export class SelectedChangeEmploymentVh2Repository extends Repository<SelectedChangeEmploymentVh2Entity> { }
