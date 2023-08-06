import { EntityRepository, Repository } from 'typeorm';
import { SelectedChildSchoolEntity } from './entities/selected-child-school.entity';

@EntityRepository(SelectedChildSchoolEntity)
export class SelectedChildSchoolRepository extends Repository<SelectedChildSchoolEntity> { }
