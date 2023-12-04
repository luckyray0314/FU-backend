import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { WhoParticipatesEntity } from './entities/who-participates.entity';
export declare class WhoParticipatesService extends TypeOrmCrudService<WhoParticipatesEntity> {
    constructor(repo: Repository<WhoParticipatesEntity>);
}
