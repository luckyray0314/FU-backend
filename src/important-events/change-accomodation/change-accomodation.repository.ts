import { EntityRepository, Repository } from 'typeorm';
import { ChangeAccomodationEntity } from './entities/change-accomodation.entity';

@EntityRepository(ChangeAccomodationEntity)
export class ChangeAccomodationRepository extends Repository<ChangeAccomodationEntity> { }
