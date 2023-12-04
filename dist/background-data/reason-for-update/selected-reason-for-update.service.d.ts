import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedReasonForUpdateEntity } from './entities/selected-reason-for-update.entity';
export declare class SelectedReasonForUpdateService extends TypeOrmCrudService<SelectedReasonForUpdateEntity> {
    constructor(repo: Repository<SelectedReasonForUpdateEntity>);
    create(entity: SelectedReasonForUpdateEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedReasonForUpdateEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
