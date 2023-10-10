import { EntityRepository, Repository } from 'typeorm';
import { SelectedChangeLiveEntity } from './entities/selected-change-live.entity';

@EntityRepository(SelectedChangeLiveEntity)
export class SelectedChangeLiveRepository extends Repository<SelectedChangeLiveEntity> { }

