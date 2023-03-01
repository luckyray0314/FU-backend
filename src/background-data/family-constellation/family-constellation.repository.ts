import { EntityRepository, Repository } from 'typeorm';
import { FamilyConstellationEntity } from './entities/family-constellation.entity';

@EntityRepository(FamilyConstellationEntity)
export class FamilyConstellationRepository extends Repository<FamilyConstellationEntity> { }
