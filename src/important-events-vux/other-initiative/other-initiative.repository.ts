import { EntityRepository, Repository } from 'typeorm';
import { OtherInitiativeEntity } from './entities/other-initiative.entity';

@EntityRepository(OtherInitiativeEntity)
export class OtherInitiativeRepository extends Repository<OtherInitiativeEntity> { }
