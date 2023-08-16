import { EntityRepository, Repository } from 'typeorm';
import { GenderAdultEntity } from './entities/gender.entity';

@EntityRepository(GenderAdultEntity)
export class GenderAdultRepository extends Repository<GenderAdultEntity> {}
