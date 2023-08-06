import { EntityRepository, Repository } from 'typeorm';
import { SelectedChangeEmploymentVh1Entity } from './entities/selected-change-employment-vh1.entity';

@EntityRepository(SelectedChangeEmploymentVh1Entity)
export class SelectedChangeEmploymentVh1Repository extends Repository<SelectedChangeEmploymentVh1Entity> { }
