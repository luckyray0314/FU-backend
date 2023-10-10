import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { OtherInitiativeEntity } from './entities/other-initiative.entity';

@Injectable()
export class OtherInitiativeService extends TypeOrmCrudService<OtherInitiativeEntity> {
  constructor(@InjectRepository(OtherInitiativeEntity) repo: Repository<OtherInitiativeEntity>) {
    super(repo);
  }
}
