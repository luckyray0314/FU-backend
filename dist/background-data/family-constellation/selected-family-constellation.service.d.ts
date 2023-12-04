import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedFamilyConstellationEntity } from './entities/selected-family-constellation.entity';
export declare class SelectedFamilyConstellationService extends TypeOrmCrudService<SelectedFamilyConstellationEntity> {
    constructor(repo: Repository<SelectedFamilyConstellationEntity>);
    create(entity: SelectedFamilyConstellationEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedFamilyConstellationEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
