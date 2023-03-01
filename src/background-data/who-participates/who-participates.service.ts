import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { WhoParticipatesEntity } from './entities/who-participates.entity';

@Injectable()
export class WhoParticipatesService extends TypeOrmCrudService<WhoParticipatesEntity> {
  constructor(@InjectRepository(WhoParticipatesEntity) repo: Repository<WhoParticipatesEntity>) {
    super(repo);
  }
}
