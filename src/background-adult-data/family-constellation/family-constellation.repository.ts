import { EntityRepository, Repository } from 'typeorm';
import { FamilyConstellationAdultEntity } from './entities/family-constellation.entity';

@EntityRepository(FamilyConstellationAdultEntity)
export class FamilyConstellationAdultRepository extends Repository<FamilyConstellationAdultEntity> { }
