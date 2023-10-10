import { EntityRepository, Repository } from 'typeorm';
import { SelectedChangeOverEntity } from './entities/selected-change-over.entity';

@EntityRepository(SelectedChangeOverEntity)
export class SelectedChangeOverRepository extends Repository<SelectedChangeOverEntity> { }

