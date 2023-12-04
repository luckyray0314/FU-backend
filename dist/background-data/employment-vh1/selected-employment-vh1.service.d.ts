import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEmploymentVh1Entity } from './entities/selected-employment-vh1.entity';
export declare class SelectedEmploymentVh1Service extends TypeOrmCrudService<SelectedEmploymentVh1Entity> {
    constructor(repo: Repository<SelectedEmploymentVh1Entity>);
    create(entity: SelectedEmploymentVh1Entity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedEmploymentVh1Entity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
