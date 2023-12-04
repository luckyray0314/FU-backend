import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEstablishedDiagnosesEntity } from './entities/selected-established-diagnoses.entity';
export declare class SelectedEstablishedDiagnosesService extends TypeOrmCrudService<SelectedEstablishedDiagnosesEntity> {
    constructor(repo: Repository<SelectedEstablishedDiagnosesEntity>);
    create(entity: SelectedEstablishedDiagnosesEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedEstablishedDiagnosesEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
