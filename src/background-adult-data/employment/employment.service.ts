import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EmploymentEntity } from './entities/employment.entity';

@Injectable()
export class EmploymentService extends TypeOrmCrudService<EmploymentEntity> {
  constructor(@InjectRepository(EmploymentEntity) repo: Repository<EmploymentEntity>) {
    super(repo);
  }
}
