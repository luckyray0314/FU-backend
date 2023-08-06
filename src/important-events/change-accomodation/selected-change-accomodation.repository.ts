import { EntityRepository, Repository } from 'typeorm';
import { SelectedChangeAccomodationEntity } from './entities/selected-change-accomodation.entity';

@EntityRepository(SelectedChangeAccomodationEntity)
export class SelectedChangeAccomodationRepository extends Repository<SelectedChangeAccomodationEntity> { }
