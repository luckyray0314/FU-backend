import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { DuringInterventionEntity } from './entities/during-intervention.entity';

@Injectable()
export class DuringInterventionService extends TypeOrmCrudService<DuringInterventionEntity> {
  constructor(@InjectRepository(DuringInterventionEntity) repo: Repository<DuringInterventionEntity>) {
    super(repo);
  }
}
