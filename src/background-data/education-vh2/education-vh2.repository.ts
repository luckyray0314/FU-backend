import { EntityRepository, Repository } from 'typeorm';
import { EducationVh2Entity } from './entities/education-vh2.entity';

@EntityRepository(EducationVh2Entity)
export class EducationVh2Repository extends Repository<EducationVh2Entity> {}
