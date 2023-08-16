import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { OtherOngoingEffortEntity } from './entities/other-ongoing-effort.entity';

@Injectable()
export class OtherOngoingEffortService extends TypeOrmCrudService<OtherOngoingEffortEntity> {
  constructor(@InjectRepository(OtherOngoingEffortEntity) repo: Repository<OtherOngoingEffortEntity>) {
    super(repo);
  }
}
