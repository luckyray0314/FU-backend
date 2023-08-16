import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { PreviousEffortEntity } from './entities/previous-effort.entity';

@Injectable()
export class PreviousEffortService extends TypeOrmCrudService<PreviousEffortEntity> {
  constructor(@InjectRepository(PreviousEffortEntity) repo: Repository<PreviousEffortEntity>) {
    super(repo);
  }
}
