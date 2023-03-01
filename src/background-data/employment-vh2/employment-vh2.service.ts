import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EmploymentVh2Entity } from './entities/employment-vh2.entity';

@Injectable()
export class EmploymentVh2Service extends TypeOrmCrudService<EmploymentVh2Entity> {
  constructor(@InjectRepository(EmploymentVh2Entity) repo: Repository<EmploymentVh2Entity>) {
    super(repo);
  }
}
