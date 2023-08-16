import { EntityRepository, Repository } from 'typeorm';
import { SelectedFamilyConstellationAdultEntity } from './entities/selected-family-constellation.entity';

@EntityRepository(SelectedFamilyConstellationAdultEntity)
export class SelectedFamilyConstellationAdultRepository extends Repository<SelectedFamilyConstellationAdultEntity> { }
