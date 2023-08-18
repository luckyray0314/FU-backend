import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { OccasionIndex } from "src/core/models/occasion.modal";
import { In, Repository } from 'typeorm';
import { AdultFollowUpFilterDto } from './dto/adultFollowUpFilter.dto';
import { AdultScoreFilterDto } from "./dto/adult-score-filter.dto";
import { AdultScoreDto } from './dto/adultScore.dto';
import { AdultScoreEntity } from './entities/adult-score.entity';
import { SelectedActionAssignmentService } from 'src/background-adult-data/action-assignment/selected-action-assignment.service';
import { BackgroundAdultMetadataService } from 'src/background-adult-data/background-adult-metadata.service';
import { SelectedGenderAdultService } from 'src/background-adult-data/gender/selected-gender.service';
import { SelectedDuringOperationService } from 'src/background-adult-data/during-operation/selected-during-operation.service';
import { SelectedEducationLevelService } from 'src/background-adult-data/education-level/selected-education-level.service';
import { SelectedEmploymentService } from 'src/background-adult-data/employment/selected-employment.service';
import { SelectedEstablishDiagnoseService } from 'src/background-adult-data/establish-diagnose/selected-establish-diagnose.service';
import { SelectedFamilyConstellationAdultService } from 'src/background-adult-data/family-constellation/selected-family-constellation.service';
import { SelectedOtherOngoingEffortService } from 'src/background-adult-data/other-ongoing-effort/selected-other-ongoing-effort.service';
import { SelectedPreviousEffortService } from 'src/background-adult-data/previous-effort/selected-previous-effort.service';
import { SelectedProblemAreaAdultService } from 'src/background-adult-data/problem-area/selected-problem-area.service';

@Injectable()
export class AdultScoreService extends TypeOrmCrudService<AdultScoreEntity> {
  constructor(
    @InjectRepository(AdultScoreEntity) repo: Repository<AdultScoreEntity>,
    public selectedGenderAdultService: SelectedGenderAdultService,
    public selectedActionAssignmentService: SelectedActionAssignmentService,
    public selectedDuringOperationService: SelectedDuringOperationService,
    public selectedEducationLevelService: SelectedEducationLevelService,
    public selectedEmploymentService: SelectedEmploymentService,
    public selectedEstablishDiagnoseService: SelectedEstablishDiagnoseService,
    public selectedFamilyConstellationAdultService: SelectedFamilyConstellationAdultService,
    public selectedOtherOngoingEffortService: SelectedOtherOngoingEffortService,
    public selectedPreviousEffortService: SelectedPreviousEffortService,
    public selectedProblemAreaAdultService: SelectedProblemAreaAdultService,
    public backgroundAdultMetadataService: BackgroundAdultMetadataService
  ) {
    super(repo);
  }

  async create(entity: AdultScoreEntity) {
    return this.repo.insert(entity);
  }

  async update(id: number, entity: AdultScoreEntity) {
    return this.repo.update(id, entity);
  }

  async numOfClients(codeNumbers: string[], startDate: string, endDate: string, occasions: OccasionIndex[]) {
    return (codeNumbers.length === 0 || occasions.length === 0) ? 0 : await this.repo.createQueryBuilder("score")
      .select("score.codeNumber")
      .where("score.codeNumber IN (:...codeNumbers)", { codeNumbers })
      .andWhere("score.occasion IN (:...occasionNumbers)", { occasionNumbers: occasions })
      .andWhere("score.date BETWEEN :startDate AND :endDate", { startDate, endDate })
      .distinct(true)
      .getRawMany();
  }

  async avgOfOrsAndScore15(codeNumbers: string[], occasions: OccasionIndex[]) {
    return (codeNumbers.length === 0 || occasions.length === 0) ? {
      ors: 0,
      score15: 0
    } : await this.repo.createQueryBuilder("score")
      .select("AVG(ors)", "ors")
      .addSelect("AVG(score15)", "score15")
      .where("score.codeNumber IN (:...codeNumbers)", { codeNumbers })
      .andWhere("score.occasion IN (:...occasionNumbers)", { occasionNumbers: occasions })
      .getRawOne();
  }

  async getOneScore(payload: AdultScoreFilterDto) {
    try {
      const scoreEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
          person: payload.person,
          occasion: payload.occasion
        }
      });
      return scoreEntity;
    }
    catch (e) {
      console.log('getOneScore error:', e);
    }
  }

  async getScoreByOccasion(occasion: number): Promise<AdultScoreDto[]> {
    const scores = await this.repo.find({ where: { occasion } });
    return scores.map(score => ({ ...score }));
  }

  async createScoreData(payload: AdultScoreDto) {
    try {
      const scoreEntity = await this.repo.findOne({
        where: {
          codeNumber: payload.codeNumber,
          person: payload.person,
          occasion: payload.occasion
        }
      });
      if (scoreEntity) {
        scoreEntity.date = payload.date;
        scoreEntity.score15 = payload.score15;
        scoreEntity.ors = payload.ors;
        scoreEntity.score15Answers = payload.score15Answers;
        scoreEntity.orsAndSatisfactionScaleAnswers = payload.orsAndSatisfactionScaleAnswers;
        this.repo.update(scoreEntity.id, scoreEntity);
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

  async getFollowUpFilterResult(payload: AdultFollowUpFilterDto) {
    const backgroundAdultMetadata = await this.backgroundAdultMetadataService.find();

    // filter codeNumbers
    let codeNumbers = backgroundAdultMetadata.map(d => d.codeNumber);
    for (const entityName in payload.idsByEntityName) {
      const ids = payload.idsByEntityName[entityName];
      if (ids.length === 0) continue;
      switch (entityName) {
        case "genderAdult":
          const genderAdultResult = await this.selectedGenderAdultService.find({
            where: {
              codeNumber: In(codeNumbers),
              genderAdult: { id: In(ids) }
            },
            relations: ["genderAdult"],
            select: ["codeNumber"]
          });
          codeNumbers = genderAdultResult.map(r => r.codeNumber);
          break;
        case "actionAssignment":
          const actionAssignmentResult = await this.selectedActionAssignmentService.find({
            where: {
              codeNumber: In(codeNumbers),
              actionAssignment: { id: In(ids) }
            },
            relations: ["actionAssignment"],
            select: ["codeNumber"]
          });
          codeNumbers = actionAssignmentResult.map(r => r.codeNumber);
          break;
          case "duringOperation":
          const duringOperationResult = await this.selectedDuringOperationService.find({
            where: {
              codeNumber: In(codeNumbers),
              duringOperation: { id: In(ids) }
            },
            relations: ["duringOperation"],
            select: ["codeNumber"]
          });
          codeNumbers = duringOperationResult.map(r => r.codeNumber);
          break;
          case "educationLevel":
          const educationLevelResult = await this.selectedEducationLevelService.find({
            where: {
              codeNumber: In(codeNumbers),
              educationLevel: { id: In(ids) }
            },
            relations: ["educationLevel"],
            select: ["codeNumber"]
          });
          codeNumbers = educationLevelResult.map(r => r.codeNumber);
          break;
          case "employment":
          const employmentResult = await this.selectedEmploymentService.find({
            where: {
              codeNumber: In(codeNumbers),
              employment: { id: In(ids) }
            },
            relations: ["employment"],
            select: ["codeNumber"]
          });
          codeNumbers = employmentResult.map(r => r.codeNumber);
          break;
          case "establishDiagnose":
          const establishDiagnoseResult = await this.selectedEstablishDiagnoseService.find({
            where: {
              codeNumber: In(codeNumbers),
              establishDiagnose: { id: In(ids) }
            },
            relations: ["establishDiagnose"],
            select: ["codeNumber"]
          });
          codeNumbers = establishDiagnoseResult.map(r => r.codeNumber);
          break;
          case "familyConstellation":
          const familyConstellationAdultResult = await this.selectedFamilyConstellationAdultService.find({
            where: {
              codeNumber: In(codeNumbers),
              familyConstellationAdult: { id: In(ids) }
            },
            relations: ["familyConstellationAdult"],
            select: ["codeNumber"]
          });
          codeNumbers = familyConstellationAdultResult.map(r => r.codeNumber);
          break;
          case "otherOngoingEffort":
          const otherOngoingEffortResult = await this.selectedOtherOngoingEffortService.find({
            where: {
              codeNumber: In(codeNumbers),
              otherOngoingEffort: { id: In(ids) }
            },
            relations: ["otherOngoingEffort"],
            select: ["codeNumber"]
          });
          codeNumbers = otherOngoingEffortResult.map(r => r.codeNumber);
          break;
          case "previousEffort":
          const previousEffortResult = await this.selectedPreviousEffortService.find({
            where: {
              codeNumber: In(codeNumbers),
              previousEffort: { id: In(ids) }
            },
            relations: ["previousEffort"],
            select: ["codeNumber"]
          });
          codeNumbers = previousEffortResult.map(r => r.codeNumber);
          break;
          case "problemAreaAdult":
          const problemAreaAdultResult = await this.selectedProblemAreaAdultService.find({
            where: {
              codeNumber: In(codeNumbers),
              problemAreaAdult: { id: In(ids) }
            },
            relations: ["problemAreaAdult"],
            select: ["codeNumber"]
          });
          codeNumbers = problemAreaAdultResult.map(r => r.codeNumber);
          break;
      }
    }

    // filter score table with codeNumbers and date ranges
    const scoreEntities = await this.numOfClients(codeNumbers, payload.startDate, payload.endDate, payload.occasions) || [];
    const numOfClients = scoreEntities.length;
    const numOfCodeNumbers = backgroundAdultMetadata.length;
    const percentage = ((numOfCodeNumbers === 0) ? 0 : (+numOfClients / numOfCodeNumbers)) * 100;
    const { ors, score15 } = await this.avgOfOrsAndScore15(codeNumbers, payload.occasions);

    return {
      numOfClients,
      ors,
      percentage: percentage,
      score15
    };
  }

  async getScoresByCodeNumberAndOccasion(codeNumber: string) {
    return await this.repo.createQueryBuilder("score")
      .select("AVG(ors)", "ors")
      .addSelect("AVG(score15)", "score15")
      .addSelect("occasion")
      .where("score.codeNumber = :codeNumber", { codeNumber })
      .groupBy("score.occasion")
      .getRawMany();
  }

}
