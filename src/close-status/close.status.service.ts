import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BackgroundMetadataService } from 'src/background-data/background-metadata.service';
import { In, Repository } from 'typeorm';
import { CloseStatusDto } from './dto/close-status.dto';
import { CloseStatusEntity } from './entities/close-status.entity';

@Injectable()
export class CloseStatusService extends TypeOrmCrudService<CloseStatusEntity> {
  constructor(
    @InjectRepository(CloseStatusEntity) repo: Repository<CloseStatusEntity>,
    public backgroundMetadataService: BackgroundMetadataService
  ) {
    super(repo);
  }

  async getOneCloseStatus(payload: CloseStatusDto) {
    try {
      const closeStatusEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
          processor: payload.processor,
          closeStatus: payload.closeStatus,
        }
      });
      return closeStatusEntity;
    }
    catch (e) {
      console.log('getOneCloseStatus error:', e);
    }
  }

  async createCloseStatusData(payload: CloseStatusDto) {
    try {
      const closeStatusEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
          processor: payload.processor,
          closeStatus: payload.closeStatus
        }
      });
      if (closeStatusEntity) {
        closeStatusEntity.codeNumber = payload.codeNumber;
        closeStatusEntity.processor = payload.processor;
        closeStatusEntity.closeStatus = payload.closeStatus;
        this.repo.update(closeStatusEntity.id, closeStatusEntity);
      }
      else {
        this.repo.insert(payload);
      }
      return true;
    }
    catch (e) {
      console.log("create error: ", e);
      return false;
    }
  }

}
