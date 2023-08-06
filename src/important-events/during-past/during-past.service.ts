import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { DuringPastEntity } from './entities/during-past.entity';

@Injectable()
export class DuringPastService extends TypeOrmCrudService<DuringPastEntity> {
  constructor(@InjectRepository(DuringPastEntity) repo: Repository<DuringPastEntity>) {
    super(repo);
  }
}
