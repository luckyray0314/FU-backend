import { EntityRepository, Repository } from 'typeorm';
import { SelectedEstablishedDiagnosesEntity } from './entities/selected-established-diagnoses.entity';

@EntityRepository(SelectedEstablishedDiagnosesEntity)
export class SelectedEstablishedDiagnosesRepository extends Repository<SelectedEstablishedDiagnosesEntity> { }
