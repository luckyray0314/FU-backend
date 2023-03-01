import { EntityRepository, Repository } from 'typeorm';
import { TypeOfEffortEntity } from './entities/type-of-effort.entity';

@EntityRepository(TypeOfEffortEntity)
export class TypeOfEffortRepository extends Repository<TypeOfEffortEntity> { }
