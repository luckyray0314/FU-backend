import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { FamilyConstellationAdultEntity } from './entities/family-constellation.entity';

@Injectable()
export class FamilyConstellationAdultService extends TypeOrmCrudService<FamilyConstellationAdultEntity> {
  constructor(@InjectRepository(FamilyConstellationAdultEntity) repo: Repository<FamilyConstellationAdultEntity>) {
    super(repo);
  }
}
