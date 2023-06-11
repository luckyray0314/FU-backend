import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { PreviousInterventionEntity } from './entities/previous-intervention.entity';

@Injectable()
export class PreviousInterventionService extends TypeOrmCrudService<PreviousInterventionEntity> {
  constructor(@InjectRepository(PreviousInterventionEntity) repo: Repository<PreviousInterventionEntity>) {
    super(repo);
  }
}
