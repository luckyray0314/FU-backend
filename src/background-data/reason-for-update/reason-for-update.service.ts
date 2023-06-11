import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ReasonForUpdateEntity } from './entities/reason-for-update.entity';

@Injectable()
export class ReasonForUpdateService extends TypeOrmCrudService<ReasonForUpdateEntity> {
  constructor(@InjectRepository(ReasonForUpdateEntity) repo: Repository<ReasonForUpdateEntity>) {
    super(repo);
  }
}
