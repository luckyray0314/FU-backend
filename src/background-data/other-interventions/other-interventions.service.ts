import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { OtherInterventionsEntity } from './entities/other-interventions.entity';

@Injectable()
export class OtherInterventionsService extends TypeOrmCrudService<OtherInterventionsEntity> {
  constructor(@InjectRepository(OtherInterventionsEntity) repo: Repository<OtherInterventionsEntity>) {
    super(repo);
  }
}
