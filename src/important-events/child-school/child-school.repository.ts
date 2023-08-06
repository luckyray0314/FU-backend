import { EntityRepository, Repository } from 'typeorm';
import { ChildSchoolEntity } from './entities/child-school.entity';

@EntityRepository(ChildSchoolEntity)
export class ChildSchoolRepository extends Repository<ChildSchoolEntity> { }
