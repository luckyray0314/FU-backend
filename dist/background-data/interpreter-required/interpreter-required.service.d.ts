import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InterpreterRequiredEntity } from './entities/interpreter-required.entity';
export declare class InterpreterRequiredService extends TypeOrmCrudService<InterpreterRequiredEntity> {
    constructor(repo: Repository<InterpreterRequiredEntity>);
}
