import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { TypeOfEffortEntity } from './entities/type-of-effort.entity';

@Injectable()
export class TypeOfEffortService extends TypeOrmCrudService<TypeOfEffortEntity> {
  constructor(@InjectRepository(TypeOfEffortEntity) repo: Repository<TypeOfEffortEntity>) {
    super(repo);
  }
}
