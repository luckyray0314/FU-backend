import { EntityRepository, Repository } from 'typeorm';
import { InvestigationOutEntity } from './entities/investigation-out.entity';

@EntityRepository(InvestigationOutEntity)
export class InvestigationOutRepository extends Repository<InvestigationOutEntity> { }
