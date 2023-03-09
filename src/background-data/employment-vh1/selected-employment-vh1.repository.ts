import { EntityRepository, Repository } from 'typeorm';
import { SelectedEmploymentVh1Entity } from './entities/selected-employment-vh1.entity';

@EntityRepository(SelectedEmploymentVh1Entity)
export class SelectedEmploymentVh1Repository extends Repository<SelectedEmploymentVh1Entity> {}
