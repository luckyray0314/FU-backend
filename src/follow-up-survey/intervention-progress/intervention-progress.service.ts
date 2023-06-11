import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InterventionProgressEntity } from './entities/intervention-progress.entity';

@Injectable()
export class InterventionProgressService extends TypeOrmCrudService<InterventionProgressEntity> {
  constructor(@InjectRepository(InterventionProgressEntity) repo: Repository<InterventionProgressEntity>) {
    super(repo);
  }
}
