import { EntityRepository, Repository } from 'typeorm';
import { GenderEntity } from './entities/gender.entity';

@EntityRepository(GenderEntity)
export class GenderRepository extends Repository<GenderEntity> {}
