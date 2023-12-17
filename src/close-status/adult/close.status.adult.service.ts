import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BackgroundAdultMetadataService } from 'src/background-adult-data/background-adult-metadata.service';
import { Repository } from 'typeorm';
import { CloseStatusAdultEntity } from './entities/close.status.adult.entity';
import dayjs from 'dayjs';
import { ProcessorDto } from '../dto/processor.dto';
import { CloseStatusDto } from '../dto/close-status.dto';
import { CodeNumberDto } from '../dto/codeNumber.dto';

@Injectable()
export class CloseStatusAdultService extends TypeOrmCrudService<CloseStatusAdultEntity> {
  constructor(
    @InjectRepository(CloseStatusAdultEntity)
    repo: Repository<CloseStatusAdultEntity>,
    public backgroundAdultMetadataService: BackgroundAdultMetadataService,
  ) {
    super(repo);
  }

  async create(entity: CloseStatusAdultEntity) {
    return this.repo.insert(entity);
  }

  async update(id: number, entity: CloseStatusAdultEntity) {
    return this.repo.update(id, entity);
  }

  async getCloseStatusByCodeNumber(
    codeNumber: string,
  ): Promise<CloseStatusDto[]> {
    const statuses = await this.repo.find({ where: { codeNumber } });
    return statuses.map(score => ({ ...score }));
  }

  async createCloseStatusData(payload: CloseStatusDto) {
    try {
      const closeStatusAdultEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
          //   processor: payload.processor,
          //   isClosed: payload.isClosed
        },
      });
      if (closeStatusAdultEntity) {
        closeStatusAdultEntity.processor = payload.processor;
        closeStatusAdultEntity.isClosed = payload.isClosed;
        this.repo.update(closeStatusAdultEntity.id, closeStatusAdultEntity);
      } else {
        this.repo.insert(payload);
      }
      return true;
    } catch (e) {
      console.log('create error: ', e);
      return false;
    }
  }

  async getOneCloseStatus(payload: CloseStatusDto) {
    try {
      const closeStatusAdultEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
        },
      });
      return closeStatusAdultEntity;
    } catch (e) {
      console.log('getOneScore error:', e);
    }
  }

  async getAll(): Promise<CloseStatusDto[]> {
    const closeStatuses = await this.repo.find();
    return closeStatuses.map(status => ({ ...status }));
  }

  async getLast(): Promise<CodeNumberDto> {
    const closeStatus = await this.repo
      .createQueryBuilder('close-status-adult')
      .select('close-status-adult.codeNumber', 'codeNumber')
      .orderBy('close-status-adult.id', 'DESC')
      .addOrderBy('close-status-adult.codeNumber', 'DESC')
      .limit(1)
      .getRawOne();
    if (closeStatus?.codeNumber) {
      const number = Number(closeStatus?.codeNumber?.split('-')[1]);
      if (number < 200) {
        return { codeNumber: `Vux${dayjs().format('YYYY')}-200` };
      } else {
        return closeStatus;
      }
    } else {
      return { codeNumber: `Vux${dayjs().format('YYYY')}-0000` };
    }
  }

  async updateProcessor(codeNumber: string, payload: ProcessorDto) {
    try {
      const closeStatusFound = await this.repo.findOne({
        where: {
          codeNumber: codeNumber,
        },
      });
      if (closeStatusFound) {
        closeStatusFound.processor = payload.processor;
        this.repo.update(closeStatusFound?.id, closeStatusFound);
      } else {
        throw new NotFoundException(`CodeNumber not found ${codeNumber}`);
      }
      return closeStatusFound;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
