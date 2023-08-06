import { EntityRepository, Repository } from 'typeorm';
import { ChangeEmploymentVh1Entity } from './entities/change-employment-vh1.entity';

@EntityRepository(ChangeEmploymentVh1Entity)
export class ChangeEmploymentVh1Repository extends Repository<ChangeEmploymentVh1Entity> { }
