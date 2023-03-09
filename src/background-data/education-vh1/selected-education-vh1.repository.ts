import { EntityRepository, Repository } from 'typeorm';
import { SelectedEducationVh1Entity } from './entities/selected-education-vh1.entity';

@EntityRepository(SelectedEducationVh1Entity)
export class SelectedEducationVh1Repository extends Repository<SelectedEducationVh1Entity> {}
