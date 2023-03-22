import { EntityRepository, Repository } from 'typeorm';
import { TimeConsumptionEntity } from './entities/time-consumption.entity';

@EntityRepository(TimeConsumptionEntity)
export class TimeConsumptionRepository extends Repository<TimeConsumptionEntity> {}
