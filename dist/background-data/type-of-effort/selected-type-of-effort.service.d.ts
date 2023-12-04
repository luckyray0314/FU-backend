import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedTypeOfEffortEntity } from './entities/selected-type-of-effort.entity';
export declare class SelectedTypeOfEffortService extends TypeOrmCrudService<SelectedTypeOfEffortEntity> {
    constructor(repo: Repository<SelectedTypeOfEffortEntity>);
    create(entity: SelectedTypeOfEffortEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedTypeOfEffortEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
