import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BackgroundMetadataService } from 'src/background-data/background-metadata.service';
import { SelectedEducationVh1Service } from 'src/background-data/education-vh1/selected-education-vh1.service';
import { SelectedEducationVh2Service } from 'src/background-data/education-vh2/selected-education-vh2.service';
import { SelectedEmploymentVh1Service } from 'src/background-data/employment-vh1/selected-employment-vh1.service';
import { SelectedEmploymentVh2Service } from 'src/background-data/employment-vh2/selected-employment-vh2.service';
import { SelectedEstablishedDiagnosesService } from 'src/background-data/established-diagnoses/selected-established-diagnoses.service';
import { SelectedFamilyConstellationService } from 'src/background-data/family-constellation/selected-family-constellation.service';
import { SelectedGenderService } from 'src/background-data/gender/selected-gender.service';
import { SelectedInterpreterRequiredService } from 'src/background-data/interpreter-required/selected-interpreter-required.service';
import { SelectedOtherInterventionsService } from 'src/background-data/other-interventions/selected-other-interventions.service';
import { SelectedPreviousInterventionService } from 'src/background-data/previous-intervention/selected-previous-intervention.service';
import { SelectedProblemAreaService } from 'src/background-data/problem-area/selected-problem-area.service';
import { SelectedReasonForUpdateService } from 'src/background-data/reason-for-update/selected-reason-for-update.service';
import { SelectedSchoolUniformService } from 'src/background-data/school-uniform/selected-school-uniform.service';
import { SelectedTypeOfEffortService } from 'src/background-data/type-of-effort/selected-type-of-effort.service';
import { SelectedWhoParticipatesService } from 'src/background-data/who-participates/selected-who-participates.service';
import { OccasionIndex } from 'src/core/models/occasion.modal';
import { In, Repository } from 'typeorm';
import { FollowUpFilterDto } from './dto/followUpFilter.dto';
import { ScoreFilterDto } from './dto/score-filter.dto';
import { ScoreDto } from './dto/score.dto';
import { ScoreEntity } from './entities/score.entity';
import { CloseStatusService } from 'src/close-status/child/close.status.child.service';
import { SelectedOtherInterventionsStartedService } from 'src/important-events/otherinterventions-started/selected-otherinterventions-started.service';
import { SelectedDuringInterventionService } from 'src/important-events/during-intervention/selected-during-intervention.service';
import { SelectedDuringPastService } from 'src/important-events/during-past/selected-during-past.service';
import { SelectedChildSchoolService } from 'src/important-events/child-school/selected-child-school.service';
import { SelectedChangeAccomodationService } from 'src/important-events/change-accomodation/selected-change-accomodation.service';
import { SelectedChangeEmploymentVh1Service } from 'src/important-events/change-employment-vh1/selected-change-employment-vh1.service';
import { SelectedChangeEmploymentVh2Service } from 'src/important-events/change-employment-vh2/selected-change-employment-vh2.service';

@Injectable()
export class ScoreService extends TypeOrmCrudService<ScoreEntity> {
  constructor(
    @InjectRepository(ScoreEntity) repo: Repository<ScoreEntity>,
    public selectedGenderService: SelectedGenderService,
    public selectedEducationVh1Service: SelectedEducationVh1Service,
    public selectedEducationVh2Service: SelectedEducationVh2Service,
    public selectedEmploymentVh1Service: SelectedEmploymentVh1Service,
    public selectedEmploymentVh2Service: SelectedEmploymentVh2Service,
    public selectedEstablishedDiagnosesService: SelectedEstablishedDiagnosesService,
    public selectedFamilyConstellationService: SelectedFamilyConstellationService,
    public selectedInterpreterRequiredService: SelectedInterpreterRequiredService,
    public selectedPreviousInterventionService: SelectedPreviousInterventionService,
    public selectedOtherInterventionsService: SelectedOtherInterventionsService,
    public selectedProblemAreaService: SelectedProblemAreaService,
    public selectedReasonForUpdateService: SelectedReasonForUpdateService,
    public selectedSchoolUniformService: SelectedSchoolUniformService,
    public selectedTypeOfEffortService: SelectedTypeOfEffortService,
    public selectedWhoParticipatesService: SelectedWhoParticipatesService,
    public backgroundMetadataService: BackgroundMetadataService,
    public closeStatusService: CloseStatusService,
    public selectedOtherInterventionsStartedService: SelectedOtherInterventionsStartedService,
    public selectedDuringInterventionService: SelectedDuringInterventionService,
    public selectedDuringPastService: SelectedDuringPastService,
    public selectedChildSchoolService: SelectedChildSchoolService,
    public selectedChangeAccomodationService: SelectedChangeAccomodationService,
    public selectedChangeEmploymentVh1Service: SelectedChangeEmploymentVh1Service,
    public selectedChangeEmploymentVh2Service: SelectedChangeEmploymentVh2Service,
  ) {
    super(repo);
  }

  async create(entity: ScoreEntity) {
    return this.repo.insert(entity);
  }

  async update(id: number, entity: ScoreEntity) {
    return this.repo.update(id, entity);
  }

  async numOfClients(
    codeNumbers: string[],
    startDate: string,
    endDate: string,
    occasions: OccasionIndex[],
  ) {
    return codeNumbers.length === 0 || occasions.length === 0
      ? 0
      : await this.repo
          .createQueryBuilder('score')
          .select('score.codeNumber')
          .where('score.codeNumber IN (:...codeNumbers)', { codeNumbers })
          .andWhere('score.occasion IN (:...occasionNumbers)', {
            occasionNumbers: occasions,
          })
          .andWhere('score.date BETWEEN :startDate AND :endDate', {
            startDate,
            endDate,
          })
          .distinct(true)
          .getRawMany();
  }

  async avgOfOrsAndScore15(codeNumbers: string[], occasions: OccasionIndex[]) {
    return codeNumbers.length === 0 || occasions.length === 0
      ? {
          ors: 0,
          score15: 0,
        }
      : await this.repo
          .createQueryBuilder('score')
          .select('AVG(ors)', 'ors')
          .addSelect('AVG(score15)', 'score15')
          .where('score.codeNumber IN (:...codeNumbers)', { codeNumbers })
          .andWhere('score.occasion IN (:...occasionNumbers)', {
            occasionNumbers: occasions,
          })
          .getRawOne();
  }

  async getOneScore(payload: ScoreFilterDto) {
    try {
      const scoreEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
          person: payload.person,
          occasion: payload.occasion,
        },
      });
      return scoreEntity;
    } catch (e) {
      console.log('getOneScore error:', e);
    }
  }

  async getScoreByOccasion(occasion: number): Promise<ScoreDto[]> {
    const scores = await this.repo.find({ where: { occasion } });
    return scores.map(score => ({ ...score }));
  }

  async createScoreData(payload: ScoreDto) {
    try {
      const scoreEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
          person: payload.person,
          occasion: payload.occasion,
        },
      });
      if (scoreEntity) {
        scoreEntity.date = payload.date;
        scoreEntity.score15 = payload.score15;
        scoreEntity.ors = payload.ors;
        scoreEntity.score15Answers = payload.score15Answers;
        scoreEntity.orsAndSatisfactionScaleAnswers =
          payload.orsAndSatisfactionScaleAnswers;
        this.repo.update(scoreEntity.id, scoreEntity);
      } else {
        this.repo.insert(payload);
      }
      return true;
    } catch (e) {
      console.log('create error: ', e);
      return false;
    }
  }

  async getFollowUpFilterResult(payload: FollowUpFilterDto) {
    const backgroundMetadata = await this.backgroundMetadataService.find();

    // filter codeNumbers
    let codeNumbers = backgroundMetadata.map(d => d.codeNumber);
    for (const entityName in payload.idsByEntityName) {
      const ids = payload.idsByEntityName[entityName];
      if (ids.length === 0) continue;
      switch (entityName) {
        case 'gender':
          const genderResult = await this.selectedGenderService.find({
            where: {
              codeNumber: In(codeNumbers),
              gender: { id: In(ids) },
            },
            relations: ['gender'],
            select: ['codeNumber'],
          });
          codeNumbers = genderResult.map(r => r.codeNumber);
          break;
        case 'educationVh1':
          const educationVh1Result =
            await this.selectedEducationVh1Service.find({
              where: {
                codeNumber: In(codeNumbers),
                educationVh1: { id: In(ids) },
              },
              relations: ['educationVh1'],
              select: ['codeNumber'],
            });
          codeNumbers = educationVh1Result.map(r => r.codeNumber);
          break;
        case 'educationVh2':
          const educationVh2Result =
            await this.selectedEducationVh2Service.find({
              where: {
                codeNumber: In(codeNumbers),
                educationVh2: { id: In(ids) },
              },
              relations: ['educationVh2'],
              select: ['codeNumber'],
            });
          codeNumbers = educationVh2Result.map(r => r.codeNumber);
          break;
        case 'employmentVh1':
          const employmentVh1Result =
            await this.selectedEmploymentVh1Service.find({
              where: {
                codeNumber: In(codeNumbers),
                employmentVh1: { id: In(ids) },
              },
              relations: ['employmentVh1'],
              select: ['codeNumber'],
            });
          codeNumbers = employmentVh1Result.map(r => r.codeNumber);
          break;
        case 'employmentVh2':
          const employmentVh2Result =
            await this.selectedEmploymentVh2Service.find({
              where: {
                codeNumber: In(codeNumbers),
                employmentVh2: { id: In(ids) },
              },
              relations: ['employmentVh2'],
              select: ['codeNumber'],
            });
          codeNumbers = employmentVh2Result.map(r => r.codeNumber);
          break;
        case 'establishedDiagnoses':
          const establishedDiagnosesResult =
            await this.selectedEstablishedDiagnosesService.find({
              where: {
                codeNumber: In(codeNumbers),
                establishedDiagnoses: { id: In(ids) },
              },
              relations: ['establishedDiagnoses'],
              select: ['codeNumber'],
            });
          codeNumbers = establishedDiagnosesResult.map(r => r.codeNumber);
          break;
        case 'familyConstellation':
          const familyConstellationResult =
            await this.selectedFamilyConstellationService.find({
              where: {
                codeNumber: In(codeNumbers),
                familyConstellation: { id: In(ids) },
              },
              relations: ['familyConstellation'],
              select: ['codeNumber'],
            });
          codeNumbers = familyConstellationResult.map(r => r.codeNumber);
          break;
        case 'interpreterRequired':
          const interpreterRequiredResult =
            await this.selectedInterpreterRequiredService.find({
              where: {
                codeNumber: In(codeNumbers),
                interpreterRequired: { id: In(ids) },
              },
              relations: ['interpreterRequired'],
              select: ['codeNumber'],
            });
          codeNumbers = interpreterRequiredResult.map(r => r.codeNumber);
          break;
        case 'otherInterventions':
          const otherInterventionsResult =
            await this.selectedOtherInterventionsService.find({
              where: {
                codeNumber: In(codeNumbers),
                otherInterventions: { id: In(ids) },
              },
              relations: ['otherInterventions'],
              select: ['codeNumber'],
            });
          codeNumbers = otherInterventionsResult.map(r => r.codeNumber);
          break;
        case 'previousIntervention':
          const previousInterventionResult =
            await this.selectedPreviousInterventionService.find({
              where: {
                codeNumber: In(codeNumbers),
                previousIntervention: { id: In(ids) },
              },
              relations: ['previousIntervention'],
              select: ['codeNumber'],
            });
          codeNumbers = previousInterventionResult.map(r => r.codeNumber);
          break;
        case 'problemArea':
          const problemAreaResult = await this.selectedProblemAreaService.find({
            where: {
              codeNumber: In(codeNumbers),
              problemArea: { id: In(ids) },
            },
            relations: ['problemArea'],
            select: ['codeNumber'],
          });
          codeNumbers = problemAreaResult.map(r => r.codeNumber);
          break;
        case 'reasonForUpdate':
          const reasonForUpdateResult =
            await this.selectedReasonForUpdateService.find({
              where: {
                codeNumber: In(codeNumbers),
                reasonForUpdate: { id: In(ids) },
              },
              relations: ['reasonForUpdate'],
              select: ['codeNumber'],
            });
          codeNumbers = reasonForUpdateResult.map(r => r.codeNumber);
          break;
        case 'schoolUniform':
          const schoolUniformResult =
            await this.selectedSchoolUniformService.find({
              where: {
                codeNumber: In(codeNumbers),
                schoolUniform: { id: In(ids) },
              },
              relations: ['schoolUniform'],
              select: ['codeNumber'],
            });
          codeNumbers = schoolUniformResult.map(r => r.codeNumber);
          break;
        case 'typeOfEffort':
          const typeOfEffortResult =
            await this.selectedTypeOfEffortService.find({
              where: {
                codeNumber: In(codeNumbers),
                typeOfEffort: { id: In(ids) },
              },
              relations: ['typeOfEffort'],
              select: ['codeNumber'],
            });
          codeNumbers = typeOfEffortResult.map(r => r.codeNumber);
          break;
        case 'whoParticipates':
          const whoParticipatesResult =
            await this.selectedWhoParticipatesService.find({
              where: {
                codeNumber: In(codeNumbers),
                whoParticipates: { id: In(ids) },
              },
              relations: ['whoParticipates'],
              select: ['codeNumber'],
            });
          codeNumbers = whoParticipatesResult.map(r => r.codeNumber);
          break;
        case 'participants':
          const isChild = ids.includes(0);
          const isGuardianOne = ids.includes(1);
          const isGuardianTwo = ids.includes(2);
          let participantsQuery: any = {
            ...(isChild && {
              isChild: 'true',
            }),
            ...(isGuardianOne && {
              isGuardianOne: 'true',
            }),
            ...(isGuardianTwo && {
              isGuardianTwo: 'true',
            }),
          };
          const participants = await this.closeStatusService.find({
            where: {
              codeNumber: In(codeNumbers),
              ...participantsQuery,
            },
            select: ['codeNumber'],
          });
          codeNumbers = participants.map(r => r.codeNumber);
          break;
        case 'otherInterventionsStarted':
          const otherInterventionsStartedResult =
            await this.selectedOtherInterventionsStartedService.find({
              where: {
                codeNumber: In(codeNumbers),
                otherInterventionsStarted: { id: In(ids) },
              },
              relations: ['otherInterventionsStarted'],
              select: ['codeNumber'],
            });
          codeNumbers = otherInterventionsStartedResult.map(r => r.codeNumber);
          break;
        case 'duringIntervention':
          const duringInterventionResult =
            await this.selectedDuringInterventionService.find({
              where: {
                codeNumber: In(codeNumbers),
                duringIntervention: { id: In(ids) },
              },
              relations: ['duringIntervention'],
              select: ['codeNumber'],
            });
          codeNumbers = duringInterventionResult.map(r => r.codeNumber);
          break;
        case 'duringPast':
          const duringPastResult = await this.selectedDuringPastService.find({
            where: {
              codeNumber: In(codeNumbers),
              duringPast: { id: In(ids) },
            },
            relations: ['duringPast'],
            select: ['codeNumber'],
          });
          codeNumbers = duringPastResult.map(r => r.codeNumber);
          break;
        case 'childSchool':
          const childSchoolResult = await this.selectedChildSchoolService.find({
            where: {
              codeNumber: In(codeNumbers),
              childSchool: { id: In(ids) },
            },
            relations: ['childSchool'],
            select: ['codeNumber'],
          });
          codeNumbers = childSchoolResult.map(r => r.codeNumber);
          break;
        case 'changeAccomodation':
          const changeAccomodationResult =
            await this.selectedChangeAccomodationService.find({
              where: {
                codeNumber: In(codeNumbers),
                changeAccomodation: { id: In(ids) },
              },
              relations: ['changeAccomodation'],
              select: ['codeNumber'],
            });
          codeNumbers = changeAccomodationResult.map(r => r.codeNumber);
          break;
        case 'changeEmploymentVh1':
          const changeEmploymentVh1Result =
            await this.selectedChangeEmploymentVh1Service.find({
              where: {
                codeNumber: In(codeNumbers),
                changeEmploymentVh1: { id: In(ids) },
              },
              relations: ['changeEmploymentVh1'],
              select: ['codeNumber'],
            });
          codeNumbers = changeEmploymentVh1Result.map(r => r.codeNumber);
          break;
        case 'changeEmploymentVh2':
          const changeEmploymentVh2Result =
            await this.selectedChangeEmploymentVh2Service.find({
              where: {
                codeNumber: In(codeNumbers),
                changeEmploymentVh2: { id: In(ids) },
              },
              relations: ['changeEmploymentVh2'],
              select: ['codeNumber'],
            });
          codeNumbers = changeEmploymentVh2Result.map(r => r.codeNumber);
          break;
      }
    }

    // filter score table with codeNumbers and date ranges
    const scoreEntities =
      (await this.numOfClients(
        codeNumbers,
        payload.startDate,
        payload.endDate,
        payload.occasions,
      )) || [];
    const numOfClients = scoreEntities.length;
    const numOfCodeNumbers = backgroundMetadata.length;
    const percentage =
      (numOfCodeNumbers === 0 ? 0 : +numOfClients / numOfCodeNumbers) * 100;
    const { ors, score15 } = await this.avgOfOrsAndScore15(
      codeNumbers,
      payload.occasions,
    );
    return {
      numOfClients,
      ors,
      percentage: percentage,
      score15,
    };
  }

  async getScoresByCodeNumberAndOccasion(codeNumber: string) {
    let codeOrArk: string = codeNumber;
    if (codeNumber.includes('Ark')) {
      const closeStatusEntity = await this.closeStatusService.find({
        where: {
          archivedCodeNumber: codeNumber,
        },
      });
      if (closeStatusEntity?.length > 0) {
        codeOrArk = closeStatusEntity[0]?.codeNumber;
      }
    }
    return await this.repo
      .createQueryBuilder('score')
      .select('AVG(ors)', 'ors')
      .addSelect('AVG(score15)', 'score15')
      .addSelect('occasion')
      .where('score.codeNumber = :codeOrArk', { codeOrArk })
      .groupBy('score.occasion')
      .getRawMany();
  }
}
