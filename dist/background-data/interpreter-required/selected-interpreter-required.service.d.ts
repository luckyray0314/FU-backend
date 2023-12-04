import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedInterpreterRequiredEntity } from './entities/selected-interpreter-required.entity';
export declare class SelectedInterpreterRequiredService extends TypeOrmCrudService<SelectedInterpreterRequiredEntity> {
    constructor(repo: Repository<SelectedInterpreterRequiredEntity>);
    create(entity: SelectedInterpreterRequiredEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedInterpreterRequiredEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
