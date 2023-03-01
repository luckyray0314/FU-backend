import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InterpreterRequiredEntity } from './entities/interpreter-required.entity';

@Injectable()
export class InterpreterRequiredService extends TypeOrmCrudService<InterpreterRequiredEntity> {
  constructor(@InjectRepository(InterpreterRequiredEntity) repo: Repository<InterpreterRequiredEntity>) {
    super(repo);
  }
}
