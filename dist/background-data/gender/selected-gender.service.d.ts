import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SelectedGenderEntity } from './entities/selected-gender.entity';
export declare class SelectedGenderService extends TypeOrmCrudService<SelectedGenderEntity> {
    constructor(repo: Repository<SelectedGenderEntity>);
    create(entity: SelectedGenderEntity): Promise<import("typeorm").InsertResult>;
    update(entity: SelectedGenderEntity): Promise<import("typeorm").UpdateResult>;
    deleteByCodeNumber(codeNumber: string): Promise<import("typeorm").DeleteResult>;
}
