import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BackgroundAdultMetadataService } from 'src/background-adult-data/background-adult-metadata.service';
import { Repository } from 'typeorm';
// import { ScoreFilterDto } from "./dto/score-filter.dto";
import { CloseStatusAdultDto } from './dto/close-status-adult.dto';
import { CloseStatusAdultEntity } from './entities/close.status.adult.entity';

@Injectable()
export class CloseStatusAdultService extends TypeOrmCrudService<CloseStatusAdultEntity> {
    constructor(
        @InjectRepository(CloseStatusAdultEntity) repo: Repository<CloseStatusAdultEntity>,
        public backgroundAdultMetadataService: BackgroundAdultMetadataService
    ) {
        super(repo);
    }

    async create(entity: CloseStatusAdultEntity) {
        return this.repo.insert(entity);
    }

    async update(id: number, entity: CloseStatusAdultEntity) {
        return this.repo.update(id, entity);
    }

    async getCloseStatusByCodeNumber(codeNumber: string): Promise<CloseStatusAdultDto[]> {
        const statuses = await this.repo.find({ where: { codeNumber } });
        return statuses.map(score => ({ ...score }));
    }

    async createCloseStatusData(payload: CloseStatusAdultDto) {
        try {
            const closeStatusAdultEntity = await this.repo.findOne({
                where: {
                    codeNumber: payload.codeNumber,
                    //   processor: payload.processor,
                    //   isClosed: payload.isClosed
                }
            });
            if (closeStatusAdultEntity) {
                closeStatusAdultEntity.processor = payload.processor;
                closeStatusAdultEntity.isClosed = payload.isClosed;
                this.repo.update(closeStatusAdultEntity.id, closeStatusAdultEntity);
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

    async getOneCloseStatus(payload: CloseStatusAdultDto) {
        try {
          const closeStatusAdultEntity = await this.repo.findOne({
            where: {
              codeNumber: payload.codeNumber,
            }
          });
          return closeStatusAdultEntity;
        }
        catch (e) {
          console.log('getOneScore error:', e);
        }
      }

      async getAll(): Promise<CloseStatusAdultDto[]> {
        const closeStatuses = await this.repo.find();
        return closeStatuses.map(status => ({ ...status }));
      }

}
