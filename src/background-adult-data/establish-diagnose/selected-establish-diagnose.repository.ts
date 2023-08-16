import { EntityRepository, Repository } from 'typeorm';
import { SelectedEstablishDiagnoseEntity } from './entities/selected-establish-diagnose.entity';

@EntityRepository(SelectedEstablishDiagnoseEntity)
export class SelectedEstablishDiagnoseRepository extends Repository<SelectedEstablishDiagnoseEntity> { }
