import { EntityRepository, Repository } from 'typeorm';
import { SelectedEducationVh2Entity } from './entities/selected-education-vh2.entity';

@EntityRepository(SelectedEducationVh2Entity)
export class SelectedEducationVh2Repository extends Repository<SelectedEducationVh2Entity> {}
