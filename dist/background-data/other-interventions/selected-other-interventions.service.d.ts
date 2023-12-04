import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedOtherInterventionsEntity } from './entities/selected-other-interventions.entity';
export declare class SelectedOtherInterventionsService extends TypeOrmCrudService<SelectedOtherInterventionsEntity> {
    constructor(repo: Repository<SelectedOtherInterventionsEntity>);
    create(entity: SelectedOtherInterventionsEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedOtherInterventionsEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
