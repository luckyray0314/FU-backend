import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SchoolUniformEntity } from './entities/school-uniform.entity';
export declare class SchoolUniformService extends TypeOrmCrudService<SchoolUniformEntity> {
    constructor(repo: Repository<SchoolUniformEntity>);
}
