import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { BackgroundMetadataEntity } from './background-metadata.entity';
export declare class BackgroundMetadataService extends TypeOrmCrudService<BackgroundMetadataEntity> {
    constructor(repo: Repository<BackgroundMetadataEntity>);
    create(entity: BackgroundMetadataEntity): Promise<BackgroundMetadataEntity>;
    update(entity: BackgroundMetadataEntity): Promise<import("typeorm").UpdateResult>;
}
