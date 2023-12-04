import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ProblemAreaEntity } from './entities/problem-area.entity';
export declare class ProblemAreaService extends TypeOrmCrudService<ProblemAreaEntity> {
    constructor(repo: Repository<ProblemAreaEntity>);
}
