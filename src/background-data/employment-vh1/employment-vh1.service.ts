import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EmploymentVh1Entity } from './entities/employment-vh1.entity';

@Injectable()
export class EmploymentVh1Service extends TypeOrmCrudService<EmploymentVh1Entity> {
  constructor(@InjectRepository(EmploymentVh1Entity) repo: Repository<EmploymentVh1Entity>) {
    super(repo);
  }
}
