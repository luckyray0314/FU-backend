import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedEducationVh1Entity } from './entities/selected-education-vh1.entity';
export declare class SelectedEducationVh1Service extends TypeOrmCrudService<SelectedEducationVh1Entity> {
    constructor(repo: Repository<SelectedEducationVh1Entity>);
    create(entity: SelectedEducationVh1Entity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedEducationVh1Entity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
