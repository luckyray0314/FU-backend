import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BackgroundMetadataService } from 'src/background-data/background-metadata.service';
import { Repository } from 'typeorm';
// import { ScoreFilterDto } from "./dto/score-filter.dto";
import { CloseStatusDto } from '../dto/close-status.dto';
import { CloseStatusEntity } from './entities/close.status.child.entity';
import dayjs from 'dayjs';
import { CodeNumberDto } from '../dto/codeNumber.dto';
import { ProcessorDto } from '../dto/processor.dto';

@Injectable()
export class CloseStatusService extends TypeOrmCrudService<CloseStatusEntity> {
  constructor(
    @InjectRepository(CloseStatusEntity) repo: Repository<CloseStatusEntity>,
    public backgroundMetadataService: BackgroundMetadataService,
  ) {
    super(repo);
  }

  async create(entity: CloseStatusEntity) {
    return this.repo.insert(entity);
  }

  async update(id: number, entity: CloseStatusEntity) {
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
      const closeStatusEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
          //   processor: payload.processor,
          //   isClosed: payload.isClosed
        },
      });
      if (closeStatusEntity) {
        closeStatusEntity.processor = payload.processor;
        closeStatusEntity.isClosed = payload.isClosed;
        this.repo.update(closeStatusEntity.id, closeStatusEntity);
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
      const closeStatusEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
        },
      });
      return closeStatusEntity;
    } catch (e) {
      console.log('getOneScore error:', e);
    }
  }

  async getOneCloseStatus1(payload: CloseStatusDto) {
    try {
      const closeStatusEntity = await this.repo.findOne({
        where: {
          processor: payload.processor,
        },
      });
      return closeStatusEntity;
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
      .createQueryBuilder('close-status')
      .select('close-status.codeNumber', 'codeNumber')
      .orderBy('close-status.id', 'DESC')
      .addOrderBy('close-status.codeNumber', 'DESC')
      .limit(1)
      .getRawOne();
    if (closeStatus?.codeNumber) {
      const number = Number(closeStatus?.codeNumber?.split('-')[1]);
      if (number < 200) {
        return { codeNumber: `Bof${dayjs().format('YYYY')}-199` };
      } else {
        return closeStatus;
      }
    } else {
      return { codeNumber: `Bof${dayjs().format('YYYY')}-0000` };
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
