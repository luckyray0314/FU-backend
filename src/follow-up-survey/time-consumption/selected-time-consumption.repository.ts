import { EntityRepository, Repository } from 'typeorm';
import { SelectedTimeConsumptionEntity } from './entities/selected-time-consumption.entity';

@EntityRepository(SelectedTimeConsumptionEntity)
export class SelectedTimeConsumptionRepository extends Repository<SelectedTimeConsumptionEntity> {}
