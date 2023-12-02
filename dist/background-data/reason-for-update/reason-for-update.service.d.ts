import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ReasonForUpdateEntity } from './entities/reason-for-update.entity';
export declare class ReasonForUpdateService extends TypeOrmCrudService<ReasonForUpdateEntity> {
    constructor(repo: Repository<ReasonForUpdateEntity>);
}
