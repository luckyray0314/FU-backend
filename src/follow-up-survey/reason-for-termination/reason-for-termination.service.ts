import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ReasonForTerminationEntity } from './entities/reason-for-termination.entity';

@Injectable()
export class ReasonForTerminationService extends TypeOrmCrudService<ReasonForTerminationEntity> {
  constructor(@InjectRepository(ReasonForTerminationEntity) repo: Repository<ReasonForTerminationEntity>) {
    super(repo);
  }
}
