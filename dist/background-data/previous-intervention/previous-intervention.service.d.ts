import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { PreviousInterventionEntity } from './entities/previous-intervention.entity';
export declare class PreviousInterventionService extends TypeOrmCrudService<PreviousInterventionEntity> {
    constructor(repo: Repository<PreviousInterventionEntity>);
}
