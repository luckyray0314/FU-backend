import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedPreviousInterventionEntity } from './entities/selected-previous-intervention.entity';
export declare class SelectedPreviousInterventionService extends TypeOrmCrudService<SelectedPreviousInterventionEntity> {
    constructor(repo: Repository<SelectedPreviousInterventionEntity>);
    create(entity: SelectedPreviousInterventionEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedPreviousInterventionEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
