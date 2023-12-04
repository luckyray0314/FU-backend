import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EstablishedDiagnosesEntity } from './entities/established-diagnoses.entity';
export declare class EstablishedDiagnosesService extends TypeOrmCrudService<EstablishedDiagnosesEntity> {
    constructor(repo: Repository<EstablishedDiagnosesEntity>);
}
