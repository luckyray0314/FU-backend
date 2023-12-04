import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEducationVh2Entity } from './entities/selected-education-vh2.entity';
export declare class SelectedEducationVh2Service extends TypeOrmCrudService<SelectedEducationVh2Entity> {
    constructor(repo: Repository<SelectedEducationVh2Entity>);
    create(entity: SelectedEducationVh2Entity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedEducationVh2Entity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
