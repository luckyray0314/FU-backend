import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { OtherInterventionsStartedEntity } from './entities/otherinterventions-started.entity';

@Injectable()
export class OtherInterventionsStartedService extends TypeOrmCrudService<OtherInterventionsStartedEntity> {
  constructor(@InjectRepository(OtherInterventionsStartedEntity) repo: Repository<OtherInterventionsStartedEntity>) {
    super(repo);
  }
}
