import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedSchoolUniformEntity } from './entities/selected-school-uniform.entity';
export declare class SelectedSchoolUniformService extends TypeOrmCrudService<SelectedSchoolUniformEntity> {
    constructor(repo: Repository<SelectedSchoolUniformEntity>);
    create(entity: SelectedSchoolUniformEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedSchoolUniformEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
