import { EntityRepository, Repository } from 'typeorm';
import { EducationVh1Entity } from './entities/education-vh1.entity';

@EntityRepository(EducationVh1Entity)
export class EducationVh1Repository extends Repository<EducationVh1Entity> {}
