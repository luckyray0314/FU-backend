import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { OtherInterventionsEntity } from './entities/other-interventions.entity';
export declare class OtherInterventionsService extends TypeOrmCrudService<OtherInterventionsEntity> {
    constructor(repo: Repository<OtherInterventionsEntity>);
}
