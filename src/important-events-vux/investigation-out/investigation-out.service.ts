import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InvestigationOutEntity } from './entities/investigation-out.entity';

@Injectable()
export class InvestigationOutService extends TypeOrmCrudService<InvestigationOutEntity> {
  constructor(@InjectRepository(InvestigationOutEntity) repo: Repository<InvestigationOutEntity>) {
    super(repo);
  }
}
