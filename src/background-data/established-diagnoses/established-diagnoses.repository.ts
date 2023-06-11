import { EntityRepository, Repository } from 'typeorm';
import { EstablishedDiagnosesEntity } from './entities/established-diagnoses.entity';

@EntityRepository(EstablishedDiagnosesEntity)
export class EstablishedDiagnosesRepository extends Repository<EstablishedDiagnosesEntity> {}
