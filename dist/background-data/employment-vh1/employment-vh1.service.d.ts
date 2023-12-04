import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EmploymentVh1Entity } from './entities/employment-vh1.entity';
export declare class EmploymentVh1Service extends TypeOrmCrudService<EmploymentVh1Entity> {
    constructor(repo: Repository<EmploymentVh1Entity>);
}
