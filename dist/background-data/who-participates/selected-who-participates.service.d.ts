import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedWhoParticipatesEntity } from './entities/selected-who-participates.entity';
export declare class SelectedWhoParticipatesService extends TypeOrmCrudService<SelectedWhoParticipatesEntity> {
    constructor(repo: Repository<SelectedWhoParticipatesEntity>);
    create(entity: SelectedWhoParticipatesEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedWhoParticipatesEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
