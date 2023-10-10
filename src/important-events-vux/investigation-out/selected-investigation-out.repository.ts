import { EntityRepository, Repository } from 'typeorm';
import { SelectedInvestigationOutEntity } from './entities/selected-investigation-out.entity';

@EntityRepository(SelectedInvestigationOutEntity)
export class SelectedInvestigationOutRepository extends Repository<SelectedInvestigationOutEntity> { }

