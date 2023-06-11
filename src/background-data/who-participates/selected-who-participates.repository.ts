import { EntityRepository, Repository } from 'typeorm';
import { SelectedWhoParticipatesEntity } from './entities/selected-who-participates.entity';

@EntityRepository(SelectedWhoParticipatesEntity)
export class SelectedWhoParticipatesRepository extends Repository<SelectedWhoParticipatesEntity> { }
