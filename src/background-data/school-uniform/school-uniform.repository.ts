import { EntityRepository, Repository } from 'typeorm';
import { SchoolUniformEntity } from './entities/school-uniform.entity';

@EntityRepository(SchoolUniformEntity)
export class SchoolUniformRepository extends Repository<SchoolUniformEntity> { }
