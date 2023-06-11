import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { TimeConsumptionEntity } from './entities/time-consumption.entity';

@Injectable()
export class TimeConsumptionService extends TypeOrmCrudService<TimeConsumptionEntity> {
  constructor(@InjectRepository(TimeConsumptionEntity) repo: Repository<TimeConsumptionEntity>) {
    super(repo);
  }
}
