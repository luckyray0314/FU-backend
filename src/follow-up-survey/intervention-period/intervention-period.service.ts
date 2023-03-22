import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InterventionPeriodEntity } from './entities/intervention-period.entity';

@Injectable()
export class InterventionPeriodService extends TypeOrmCrudService<InterventionPeriodEntity> {
  constructor(@InjectRepository(InterventionPeriodEntity) repo: Repository<InterventionPeriodEntity>) {
    super(repo);
  }
}
