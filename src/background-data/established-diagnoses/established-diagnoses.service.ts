import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EstablishedDiagnosesEntity } from './entities/established-diagnoses.entity';

@Injectable()
export class EstablishedDiagnosesService extends TypeOrmCrudService<EstablishedDiagnosesEntity> {
  constructor(@InjectRepository(EstablishedDiagnosesEntity) repo: Repository<EstablishedDiagnosesEntity>) {
    super(repo);
  }
}
