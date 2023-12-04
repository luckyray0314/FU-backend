import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EmploymentVh2Entity } from './entities/employment-vh2.entity';
export declare class EmploymentVh2Service extends TypeOrmCrudService<EmploymentVh2Entity> {
    constructor(repo: Repository<EmploymentVh2Entity>);
}
