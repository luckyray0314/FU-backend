import { EntityRepository, Repository } from 'typeorm';
import { SelectedEducationLevelEntity } from './entities/selected-education-level.entity';

@EntityRepository(SelectedEducationLevelEntity)
export class SelectedEducationLevelRepository extends Repository<SelectedEducationLevelEntity> { }
