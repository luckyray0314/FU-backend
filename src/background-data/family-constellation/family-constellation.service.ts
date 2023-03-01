import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { FamilyConstellationEntity } from './entities/family-constellation.entity';

@Injectable()
export class FamilyConstellationService extends TypeOrmCrudService<FamilyConstellationEntity> {
  constructor(@InjectRepository(FamilyConstellationEntity) repo: Repository<FamilyConstellationEntity>) {
    super(repo);
  }
}
