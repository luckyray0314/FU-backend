import { EntityRepository, Repository } from 'typeorm';
import { EducationLevelEntity } from './entities/education-level.entity';

@EntityRepository(EducationLevelEntity)
export class EducationLevelRepository extends Repository<EducationLevelEntity> { }
