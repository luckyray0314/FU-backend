import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ChangeOverEntity } from './entities/change-over.entity';

@Injectable()
export class ChangeOverService extends TypeOrmCrudService<ChangeOverEntity> {
  constructor(@InjectRepository(ChangeOverEntity) repo: Repository<ChangeOverEntity>) {
    super(repo);
  }
}
