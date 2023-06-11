import { EntityRepository, Repository } from 'typeorm';
import { SelectedInterpreterRequiredEntity } from './entities/selected-interpreter-required.entity';

@EntityRepository(SelectedInterpreterRequiredEntity)
export class SelectedInterpreterRequiredRepository extends Repository<SelectedInterpreterRequiredEntity> { }
