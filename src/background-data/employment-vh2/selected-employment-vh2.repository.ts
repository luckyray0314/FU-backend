import { EntityRepository, Repository } from 'typeorm';
import { SelectedEmploymentVh2Entity } from './entities/selected-employment-vh2.entity';

@EntityRepository(SelectedEmploymentVh2Entity)
export class SelectedEmploymentVh2Repository extends Repository<SelectedEmploymentVh2Entity> {}
