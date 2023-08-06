import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ChangeEmploymentVh2Entity } from './entities/change-employment-vh2.entity';

@Injectable()
export class ChangeEmploymentVh2Service extends TypeOrmCrudService<ChangeEmploymentVh2Entity> {
  constructor(@InjectRepository(ChangeEmploymentVh2Entity) repo: Repository<ChangeEmploymentVh2Entity>) {
    super(repo);
  }
}
