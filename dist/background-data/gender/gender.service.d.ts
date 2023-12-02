import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { GenderEntity } from './entities/gender.entity';
export declare class GenderService extends TypeOrmCrudService<GenderEntity> {
    constructor(repo: Repository<GenderEntity>);
}
