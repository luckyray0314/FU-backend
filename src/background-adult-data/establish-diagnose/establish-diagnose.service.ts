import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EstablishDiagnoseEntity } from './entities/establish-diagnose.entity';

@Injectable()
export class EstablishDiagnoseService extends TypeOrmCrudService<EstablishDiagnoseEntity> {
  constructor(@InjectRepository(EstablishDiagnoseEntity) repo: Repository<EstablishDiagnoseEntity>) {
    super(repo);
  }
}
