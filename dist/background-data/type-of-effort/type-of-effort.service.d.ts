import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { TypeOfEffortEntity } from './entities/type-of-effort.entity';
export declare class TypeOfEffortService extends TypeOrmCrudService<TypeOfEffortEntity> {
    constructor(repo: Repository<TypeOfEffortEntity>);
}
