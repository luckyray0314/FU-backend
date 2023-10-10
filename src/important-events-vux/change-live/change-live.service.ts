import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ChangeLiveEntity } from './entities/change-live.entity';

@Injectable()
export class ChangeLiveService extends TypeOrmCrudService<ChangeLiveEntity> {
  constructor(@InjectRepository(ChangeLiveEntity) repo: Repository<ChangeLiveEntity>) {
    super(repo);
  }
}
