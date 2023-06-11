import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EducationVh1Entity } from './entities/education-vh1.entity';

@Injectable()
export class EducationVh1Service extends TypeOrmCrudService<EducationVh1Entity> {
  constructor(@InjectRepository(EducationVh1Entity) repo: Repository<EducationVh1Entity>) {
    super(repo);
  }
}
