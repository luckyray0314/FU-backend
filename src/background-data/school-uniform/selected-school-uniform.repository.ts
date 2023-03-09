import { EntityRepository, Repository } from 'typeorm';
import { SelectedSchoolUniformEntity } from './entities/selected-school-uniform.entity';

@EntityRepository(SelectedSchoolUniformEntity)
export class SelectedSchoolUniformRepository extends Repository<SelectedSchoolUniformEntity> { }
