import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { GenderAdultEntity } from './entities/gender.entity';

@Injectable()
export class GenderAdultService extends TypeOrmCrudService<GenderAdultEntity> {
  constructor(@InjectRepository(GenderAdultEntity) repo: Repository<GenderAdultEntity>) {
    super(repo);
  }
}
