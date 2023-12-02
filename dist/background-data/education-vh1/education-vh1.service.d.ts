import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EducationVh1Entity } from './entities/education-vh1.entity';
export declare class EducationVh1Service extends TypeOrmCrudService<EducationVh1Entity> {
    constructor(repo: Repository<EducationVh1Entity>);
}
