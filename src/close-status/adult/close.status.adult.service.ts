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
import { CloseStatusDto } from '../child/close-status.dto';
import { CodeNumberDto } from '../dto/codeNumber.dto';
import { CloseStatusAdultDto } from './close-status.adult.dto';

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
        },
      });
      if (closeStatusAdultEntity?.id) {
        closeStatusAdultEntity.processor = payload.processor;
        closeStatusAdultEntity.isClosed = payload.isClosed;
        this.repo.update(closeStatusAdultEntity.id, {
          ...closeStatusAdultEntity,
        });
      } else {
        this.repo.insert(payload);
      }
      return true;
    } catch (e) {
      console.log('create error: ', e);
      return false;
    }
  }

  async getOneCloseStatus(payload: CloseStatusAdultDto) {
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

  async findAll(): Promise<CloseStatusDto[]> {
    return this.repo.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async getLast(): Promise<CodeNumberDto> {
    const closeStatus = await this.repo
      .createQueryBuilder('close-status-adult')
      .select('close-status-adult.codeNumber', 'codeNumber')
      .orderBy('close-status-adult.codeNumber', 'DESC')
      .addOrderBy('close-status-adult.codeNumber', 'DESC')
      .limit(1)
      .getRawOne();
    if (closeStatus?.codeNumber) {
      const number = Number(closeStatus?.codeNumber?.split('-')[1]);
      if (number < 200) {
        return { codeNumber: `Vux${dayjs().format('YYYY')}-199` };
      } else {
        return closeStatus;
      }
    } else {
      return { codeNumber: `Vux${dayjs().format('YYYY')}-199` };
    }
  }

  async updateProcessor(codeNumber: string, payload: ProcessorDto) {
    try {
      let closeStatusFound;
      if (codeNumber?.includes('Ark-')) {
        closeStatusFound = await this.repo.findOne({
          where: {
            archivedCodeNumber: codeNumber,
          },
        });
      } else {
        closeStatusFound = await this.repo.findOne({
          where: {
            codeNumber: codeNumber,
          },
        });
      }
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

  async delete(codeNumber: string) {
    try {
      const closeStatusDeleted = await this.repo
        .createQueryBuilder('close-status-adult')
        .delete()
        .from('close-status-adult')
        .where('codeNumber = :codeNumber', { codeNumber })
        .execute();
      if (closeStatusDeleted?.affected > 0) {
        await this.repo
          .createQueryBuilder('adult_score')
          .delete()
          .from('adult_score')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('background_adult_metadata_entity')
          .delete()
          .from('background_adult_metadata_entity')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('follow_up_metadata_entity')
          .delete()
          .from('follow_up_metadata_entity')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_during_intervention')
          .delete()
          .from('selected_during_intervention')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_change_employment_vh1')
          .delete()
          .from('selected_change_employment_vh1')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_child_school')
          .delete()
          .from('selected_child_school')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_change_employment_vh2')
          .delete()
          .from('selected_change_employment_vh2')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_during_past')
          .delete()
          .from('selected_during_past')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_change_accomodation')
          .delete()
          .from('selected_change_accomodation')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_change_live')
          .delete()
          .from('selected_change_live')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_change_over')
          .delete()
          .from('selected_change_over')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_action_assignment')
          .delete()
          .from('selected_action_assignment')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_during_operation')
          .delete()
          .from('selected_during_operation')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('')
          .delete()
          .from('')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_employment_vh1')
          .delete()
          .from('selected_employment_vh1')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_establish_diagnose')
          .delete()
          .from('selected_establish_diagnose')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_education_vh2')
          .delete()
          .from('selected_education_vh2')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_employment_vh2')
          .delete()
          .from('selected_employment_vh2')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_employment')
          .delete()
          .from('selected_employment')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_established_diagnoses')
          .delete()
          .from('selected_established_diagnoses')
          .where('codeNumber = :codeNumber', { codeNumber })
          .execute();
        await this.repo
          .createQueryBuilder('selected_gender')
          .delete()
          .from('selected_gender')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_education_vh1')
          .delete()
          .from('selected_education_vh1')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_family_constellation')
          .delete()
          .from('selected_family_constellation')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_education_level')
          .delete()
          .from('selected_education_level')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_previous_intervention')
          .delete()
          .from('selected_previous_intervention')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_intervention_progress')
          .delete()
          .from('selected_intervention_progress')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_family_constellation_adult')
          .delete()
          .from('selected_family_constellation_adult')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_previous_effort')
          .delete()
          .from('selected_previous_effort')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_other_interventions')
          .delete()
          .from('selected_other_interventions')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_intervention_period')
          .delete()
          .from('selected_intervention_period')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_other-initiative')
          .delete()
          .from('selected_other-initiative')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_interpreter_required')
          .delete()
          .from('selected_interpreter_required')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_gender_adult')
          .delete()
          .from('selected_gender_adult')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_other_ongoing_effort')
          .delete()
          .from('selected_other_ongoing_effort')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_investigation-out')
          .delete()
          .from('selected_investigation-out')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_otherinterventions_started')
          .delete()
          .from('selected_otherinterventions_started')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_problem_area_adult')
          .delete()
          .from('selected_problem_area_adult')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_school_uniform')
          .delete()
          .from('selected_school_uniform')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_who_participates')
          .delete()
          .from('selected_who_participates')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_reason_for_termination')
          .delete()
          .from('selected_reason_for_termination')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_reason_for_update')
          .delete()
          .from('selected_reason_for_update')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_problem_area')
          .delete()
          .from('selected_problem_area')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_type_of_effort')
          .delete()
          .from('selected_type_of_effort')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        await this.repo
          .createQueryBuilder('selected_time_consumption')
          .delete()
          .from('selected_time_consumption')
          .where('codeNumber = :codeNumber', {
            codeNumber,
          })
          .execute();
        return { codeNumber };
      } else {
        throw new NotFoundException(`CodeNumber not found ${codeNumber}`);
      }
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
