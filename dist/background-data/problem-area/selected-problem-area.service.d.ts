import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedProblemAreaEntity } from './entities/selected-problem-area.entity';
export declare class SelectedProblemAreaService extends TypeOrmCrudService<SelectedProblemAreaEntity> {
    constructor(repo: Repository<SelectedProblemAreaEntity>);
    create(entity: SelectedProblemAreaEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedProblemAreaEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
