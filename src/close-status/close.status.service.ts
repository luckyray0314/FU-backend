import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BackgroundMetadataService } from 'src/background-data/background-metadata.service';
import { Repository } from 'typeorm';
// import { ScoreFilterDto } from "./dto/score-filter.dto";
import { CloseStatusDto } from './dto/close-status.dto';
import { CloseStatusEntity } from './entities/close.status.entity';

@Injectable()
export class CloseStatusService extends TypeOrmCrudService<CloseStatusEntity> {
    constructor(
        @InjectRepository(CloseStatusEntity) repo: Repository<CloseStatusEntity>,
        public backgroundMetadataService: BackgroundMetadataService
    ) {
        super(repo);
    }

    async create(entity: CloseStatusEntity) {
        return this.repo.insert(entity);
    }

    async update(id: number, entity: CloseStatusEntity) {
        return this.repo.update(id, entity);
    }

    async getCloseStatusByCodeNumber(codeNumber: string): Promise<CloseStatusDto[]> {
        const statuses = await this.repo.find({ where: { codeNumber } });
        return statuses.map(score => ({ ...score }));
    }

    async createCloseStatusData(payload: CloseStatusDto) {
        try {
            const closeStatusEntity = await this.repo.findOne({
                where: {
                    codeNumber: payload.codeNumber,
                    //   processor: payload.processor,
                    //   isClosed: payload.isClosed
                }
            });
            if (closeStatusEntity) {
                closeStatusEntity.processor = payload.processor;
                closeStatusEntity.isClosed = payload.isClosed;
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

    async getOneCloseStatus(payload: CloseStatusDto) {
        try {
            const closeStatusEntity = await this.repo.findOne({
                where: {
                    codeNumber: payload.codeNumber,
                }
            });
            return closeStatusEntity;
        }
        catch (e) {
            console.log('getOneScore error:', e);
        }
    }

    async getOneCloseStatus1(payload: CloseStatusDto) {
        try {
            const closeStatusEntity = await this.repo.findOne({
                where: {
                    processor: payload.processor,
                }
            });
            return closeStatusEntity;
        }
        catch (e) {
            console.log('getOneScore error:', e);
        }
    }

}
