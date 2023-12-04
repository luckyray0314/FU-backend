import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EducationVh2Entity } from './entities/education-vh2.entity';
export declare class EducationVh2Service extends TypeOrmCrudService<EducationVh2Entity> {
    constructor(repo: Repository<EducationVh2Entity>);
}
