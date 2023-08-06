import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ChildSchoolEntity } from './entities/child-school.entity';

@Injectable()
export class ChildSchoolService extends TypeOrmCrudService<ChildSchoolEntity> {
  constructor(@InjectRepository(ChildSchoolEntity) repo: Repository<ChildSchoolEntity>) {
    super(repo);
  }
}
