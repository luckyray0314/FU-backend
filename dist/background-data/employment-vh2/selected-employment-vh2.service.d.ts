import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEmploymentVh2Entity } from './entities/selected-employment-vh2.entity';
export declare class SelectedEmploymentVh2Service extends TypeOrmCrudService<SelectedEmploymentVh2Entity> {
    constructor(repo: Repository<SelectedEmploymentVh2Entity>);
    create(entity: SelectedEmploymentVh2Entity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedEmploymentVh2Entity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
