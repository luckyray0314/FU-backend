import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ChangeAccomodationEntity } from './entities/change-accomodation.entity';

@Injectable()
export class ChangeAccomodationService extends TypeOrmCrudService<ChangeAccomodationEntity> {
  constructor(@InjectRepository(ChangeAccomodationEntity) repo: Repository<ChangeAccomodationEntity>) {
    super(repo);
  }
}
