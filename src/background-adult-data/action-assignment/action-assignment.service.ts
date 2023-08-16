import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ActionAssignmentEntity } from './entities/action-assignment.entity';

@Injectable()
export class ActionAssignmentService extends TypeOrmCrudService<ActionAssignmentEntity> {
  constructor(@InjectRepository(ActionAssignmentEntity) repo: Repository<ActionAssignmentEntity>) {
    super(repo);
  }
}
