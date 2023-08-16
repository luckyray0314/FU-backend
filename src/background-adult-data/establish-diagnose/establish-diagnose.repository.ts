import { EntityRepository, Repository } from 'typeorm';
import { EstablishDiagnoseEntity } from './entities/establish-diagnose.entity';

@EntityRepository(EstablishDiagnoseEntity)
export class EstablishDiagnoseRepository extends Repository<EstablishDiagnoseEntity> { }
