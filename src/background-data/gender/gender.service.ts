import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { GenderEntity } from './entities/gender.entity';

@Injectable()
export class GenderService extends TypeOrmCrudService<GenderEntity> {
  constructor(@InjectRepository(GenderEntity) repo: Repository<GenderEntity>) {
    super(repo);
  }
}
