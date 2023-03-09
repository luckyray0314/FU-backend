import { EntityRepository, Repository } from 'typeorm';
import { SelectedFamilyConstellationEntity } from './entities/selected-family-constellation.entity';

@EntityRepository(SelectedFamilyConstellationEntity)
export class SelectedFamilyConstellationRepository extends Repository<SelectedFamilyConstellationEntity> { }
