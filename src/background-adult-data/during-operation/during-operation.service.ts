import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { DuringOperationEntity } from './entities/during-operation.entity';

@Injectable()
export class DuringOperationService extends TypeOrmCrudService<DuringOperationEntity> {
  constructor(@InjectRepository(DuringOperationEntity) repo: Repository<DuringOperationEntity>) {
    super(repo);
  }
}
