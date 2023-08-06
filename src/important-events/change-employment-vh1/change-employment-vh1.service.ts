import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ChangeEmploymentVh1Entity } from './entities/change-employment-vh1.entity';

@Injectable()
export class ChangeEmploymentVh1Service extends TypeOrmCrudService<ChangeEmploymentVh1Entity> {
  constructor(@InjectRepository(ChangeEmploymentVh1Entity) repo: Repository<ChangeEmploymentVh1Entity>) {
    super(repo);
  }
}
