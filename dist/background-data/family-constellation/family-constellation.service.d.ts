import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { FamilyConstellationEntity } from './entities/family-constellation.entity';
export declare class FamilyConstellationService extends TypeOrmCrudService<FamilyConstellationEntity> {
    constructor(repo: Repository<FamilyConstellationEntity>);
}
