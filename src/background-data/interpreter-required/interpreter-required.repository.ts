import { EntityRepository, Repository } from 'typeorm';
import { InterpreterRequiredEntity } from './entities/interpreter-required.entity';

@EntityRepository(InterpreterRequiredEntity)
export class InterpreterRequiredRepository extends Repository<InterpreterRequiredEntity> { }
