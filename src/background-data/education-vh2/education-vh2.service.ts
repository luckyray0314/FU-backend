import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EducationVh2Entity } from './entities/education-vh2.entity';

@Injectable()
export class EducationVh2Service extends TypeOrmCrudService<EducationVh2Entity> {
  constructor(@InjectRepository(EducationVh2Entity) repo: Repository<EducationVh2Entity>) {
    super(repo);
  }
}
