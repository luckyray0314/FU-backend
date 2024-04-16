import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  genderAdultSeedData,
  actionAssignmentSeedData,
  duringOperationSeedData,
  educationLevelSeedData,
  employmentSeedData,
  establishDiagnoseSeedData,
  familyConstellationAdultSeedData,
  otherOngoingEffortSeedData,
  previousEffortSeedData,
  problemAreaAdultSeedData,
  changeLiveSeedData,
  changeOverSeedData,
  investigationOutSeedData,
  otherInitiativeSeedData,
} from '../../core/constants/seed.constant';
import { BackgroundAdultMetadataEntity } from 'src/background-adult-data/background-adult-metadata.entity';
import { GenderAdultEntity } from 'src/background-adult-data/gender/entities/gender.entity';
import { SelectedGenderAdultEntity } from 'src/background-adult-data/gender/entities/selected-gender.entity';
import { ActionAssignmentEntity } from 'src/background-adult-data/action-assignment/entities/action-assignment.entity';
import { SelectedActionAssignmentEntity } from 'src/background-adult-data/action-assignment/entities/selected-action-assignment.entity';
import { DuringOperationEntity } from 'src/background-adult-data/during-operation/entities/during-operation.entity';
import { SelectedDuringOperationEntity } from 'src/background-adult-data/during-operation/entities/selected-during-operation.entity';
import { EducationLevelEntity } from 'src/background-adult-data/education-level/entities/education-level.entity';
import { SelectedEducationLevelEntity } from 'src/background-adult-data/education-level/entities/selected-education-level.entity';
import { EmploymentEntity } from 'src/background-adult-data/employment/entities/employment.entity';
import { SelectedEmploymentEntity } from 'src/background-adult-data/employment/entities/selected-employment.entity';
import { EstablishDiagnoseEntity } from 'src/background-adult-data/establish-diagnose/entities/establish-diagnose.entity';
import { SelectedEstablishDiagnoseEntity } from 'src/background-adult-data/establish-diagnose/entities/selected-establish-diagnose.entity';
import { FamilyConstellationAdultEntity } from 'src/background-adult-data/family-constellation/entities/family-constellation.entity';
import { SelectedFamilyConstellationAdultEntity } from 'src/background-adult-data/family-constellation/entities/selected-family-constellation.entity';
import { OtherOngoingEffortEntity } from 'src/background-adult-data/other-ongoing-effort/entities/other-ongoing-effort.entity';
import { SelectedOtherOngoingEffortEntity } from 'src/background-adult-data/other-ongoing-effort/entities/selected-other-ongoing-effort.entity';
import { PreviousEffortEntity } from 'src/background-adult-data/previous-effort/entities/previous-effort.entity';
import { SelectedPreviousEffortEntity } from 'src/background-adult-data/previous-effort/entities/selected-previous-effort.entity';
import { ProblemAreaAdultEntity } from 'src/background-adult-data/problem-area/entities/problem-area.entity';
import { SelectedProblemAreaAdultEntity } from 'src/background-adult-data/problem-area/entities/selected-problem-area.entity';
import { AdultScoreEntity } from 'src/adult-score/entities/adult-score.entity';
import { CloseStatusEntity } from 'src/close-status/child/entities/close.status.child.entity';
import { CloseStatusAdultEntity } from 'src/close-status/adult/entities/close.status.adult.entity';
import { ChangeLiveEntity } from 'src/important-events-vux/change-live/entities/change-live.entity';
import { SelectedChangeLiveEntity } from 'src/important-events-vux/change-live/entities/selected-change-live.entity';
import { ChangeOverEntity } from 'src/important-events-vux/change-over/entities/change-over.entity';
import { SelectedChangeOverEntity } from 'src/important-events-vux/change-over/entities/selected-change-over.entity';
import { InvestigationOutEntity } from 'src/important-events-vux/investigation-out/entities/investigation-out.entity';
import { SelectedInvestigationOutEntity } from 'src/important-events-vux/investigation-out/entities/selected-investigation-out.entity';
import { OtherInitiativeEntity } from 'src/important-events-vux/other-initiative/entities/other-initiative.entity';
import { SelectedOtherInitiativeEntity } from 'src/important-events-vux/other-initiative/entities/selected-other-initiative.entity';
import { BackgroundMetadataEntity } from 'src/background-data/background-metadata.entity';
import dayjs from 'dayjs';
import { SurveyStatus } from 'src/core/enums/survey-status';
//JSON Files
import vuxExcelData from 'src/core/constants/json/vux/vux-excel.json';

@Injectable()
export class SeedVuxService {
  constructor(
    @InjectRepository(CloseStatusAdultEntity)
    private readonly closeStatusAdultRepository: Repository<CloseStatusAdultEntity>,

    @InjectRepository(AdultScoreEntity)
    private readonly adultScoreRepository: Repository<AdultScoreEntity>,

    @InjectRepository(BackgroundAdultMetadataEntity)
    private readonly backgroundAdultMetadataRepository: Repository<BackgroundAdultMetadataEntity>,

    @InjectRepository(GenderAdultEntity)
    private readonly genderAdultRepository: Repository<GenderAdultEntity>,
    @InjectRepository(SelectedGenderAdultEntity)
    private readonly selectedGenderAdultRepository: Repository<SelectedGenderAdultEntity>,

    @InjectRepository(ActionAssignmentEntity)
    private readonly actionAssignmentRepository: Repository<ActionAssignmentEntity>,
    @InjectRepository(SelectedActionAssignmentEntity)
    private readonly selectedActionAssignmentRepository: Repository<SelectedActionAssignmentEntity>,

    @InjectRepository(DuringOperationEntity)
    private readonly duringOperationRepository: Repository<DuringOperationEntity>,
    @InjectRepository(SelectedDuringOperationEntity)
    private readonly selectedDuringOperationRepository: Repository<SelectedDuringOperationEntity>,

    @InjectRepository(EducationLevelEntity)
    private readonly educationLevelRepository: Repository<EducationLevelEntity>,
    @InjectRepository(SelectedEducationLevelEntity)
    private readonly selectedEducationLevelRepository: Repository<SelectedEducationLevelEntity>,

    @InjectRepository(EmploymentEntity)
    private readonly employmentRepository: Repository<EmploymentEntity>,
    @InjectRepository(SelectedEmploymentEntity)
    private readonly selectedEmploymentRepository: Repository<SelectedEmploymentEntity>,

    @InjectRepository(EstablishDiagnoseEntity)
    private readonly establishDiagnoseRepository: Repository<EstablishDiagnoseEntity>,
    @InjectRepository(SelectedEstablishDiagnoseEntity)
    private readonly selectedEstablishDiagnoseRepository: Repository<SelectedEstablishDiagnoseEntity>,

    @InjectRepository(FamilyConstellationAdultEntity)
    private readonly familyConstellationAdultRepository: Repository<FamilyConstellationAdultEntity>,
    @InjectRepository(SelectedFamilyConstellationAdultEntity)
    private readonly selectedFamilyConstellationAdultRepository: Repository<SelectedFamilyConstellationAdultEntity>,

    @InjectRepository(OtherOngoingEffortEntity)
    private readonly otherOngoingEffortRepository: Repository<OtherOngoingEffortEntity>,
    @InjectRepository(SelectedOtherOngoingEffortEntity)
    private readonly selectedOtherOngoingEffortRepository: Repository<SelectedOtherOngoingEffortEntity>,

    @InjectRepository(PreviousEffortEntity)
    private readonly previousEffortRepository: Repository<PreviousEffortEntity>,
    @InjectRepository(SelectedPreviousEffortEntity)
    private readonly selectedPreviousEffortRepository: Repository<SelectedPreviousEffortEntity>,

    @InjectRepository(ProblemAreaAdultEntity)
    private readonly problemAreaAdultRepository: Repository<ProblemAreaAdultEntity>,
    @InjectRepository(SelectedProblemAreaAdultEntity)
    private readonly selectedProblemAreaAdultRepository: Repository<SelectedProblemAreaAdultEntity>,

    @InjectRepository(ChangeLiveEntity)
    private readonly changeLiveRepository: Repository<ChangeLiveEntity>,
    @InjectRepository(SelectedChangeLiveEntity)
    private readonly selectedChangeLiveRepository: Repository<SelectedChangeLiveEntity>,

    @InjectRepository(ChangeOverEntity)
    private readonly changeOverRepository: Repository<ChangeOverEntity>,
    @InjectRepository(SelectedChangeOverEntity)
    private readonly selectedChangeOverRepository: Repository<SelectedChangeOverEntity>,

    @InjectRepository(InvestigationOutEntity)
    private readonly investigationOutRepository: Repository<InvestigationOutEntity>,
    @InjectRepository(SelectedInvestigationOutEntity)
    private readonly selectedInvestigationOutRepository: Repository<SelectedInvestigationOutEntity>,

    @InjectRepository(OtherInitiativeEntity)
    private readonly otherInitiativeRepository: Repository<OtherInitiativeEntity>,
    @InjectRepository(SelectedOtherInitiativeEntity)
    private readonly selectedOtherInitiativeRepository: Repository<SelectedOtherInitiativeEntity>,
  ) {}

  //Adult Data
  async clearVuxData(): Promise<void> {
    await this.closeStatusAdultRepository.delete({});
    await this.backgroundAdultMetadataRepository.delete({});
    await this.selectedGenderAdultRepository.delete({});
    await this.selectedProblemAreaAdultRepository.delete({});
    await this.selectedPreviousEffortRepository.delete({});
    await this.selectedOtherOngoingEffortRepository.delete({});
    await this.selectedFamilyConstellationAdultRepository.delete({});
    await this.selectedEducationLevelRepository.delete({});
    await this.selectedEmploymentRepository.delete({});
    await this.selectedDuringOperationRepository.delete({});
    await this.selectedActionAssignmentRepository.delete({});
    await this.selectedEstablishDiagnoseRepository.delete({});
    await this.adultScoreRepository.delete({});
    // Important Events
    await this.selectedChangeOverRepository.delete({});
    await this.selectedChangeLiveRepository.delete({});
    await this.selectedInvestigationOutRepository.delete({});
    await this.selectedOtherInitiativeRepository.delete({});
  }

  async seedVuxData(): Promise<void> {
    for (let index = 0; index < vuxExcelData.length; index++) {
      let isMissingBackgroundData: boolean = false;
      const element = vuxExcelData[index];
      console.log(` ${element.CodeNumber}...`);
      console.log('  Close Status...');
      const closeStatus = await this.closeStatusAdultRepository.save({
        codeNumber: element.CodeNumber,
        processor: 'v1admin',
        isClosed: 'false',
      });
      console.log('  Background Metadata...');
      const backgroundData = await this.backgroundAdultMetadataRepository.save({
        codeNumber: element.CodeNumber,
        date: element.Date,
        yearOfBirth: Number(element.YearOfBirth),
        country: element.CountryOfBirth,
      });
      console.log('  Gender...');
      const gender = await this.genderAdultRepository.findOne({
        where: {
          description: element.Gender,
        },
      });
      if (gender?.id) {
        await this.selectedGenderAdultRepository.save({
          codeNumber: element.CodeNumber,
          genderAdult: gender,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Problem Area...');
      let problemAreaMissingCounter = 0;
      let problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea1,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        problemAreaMissingCounter++;
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea2,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        problemAreaMissingCounter++;
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea3,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        problemAreaMissingCounter++;
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea4,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        problemAreaMissingCounter++;
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea5,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        problemAreaMissingCounter++;
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea6,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        problemAreaMissingCounter++;
      }
      if (problemAreaMissingCounter === 6) {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Previous Effort...');
      let previousEffortMissingCounter = 0;
      let previousEffort = await this.previousEffortRepository.findOne({
        where: {
          description: element.PreviousEffort1,
        },
      });
      if (previousEffort?.id) {
        await this.selectedPreviousEffortRepository.save({
          codeNumber: element.CodeNumber,
          previousEffort,
        });
      } else {
        previousEffortMissingCounter++;
      }
      previousEffort = await this.previousEffortRepository.findOne({
        where: {
          description: element.PreviousEffort2,
        },
      });
      if (previousEffort?.id) {
        await this.selectedPreviousEffortRepository.save({
          codeNumber: element.CodeNumber,
          previousEffort,
        });
      } else {
        previousEffortMissingCounter++;
      }
      previousEffort = await this.previousEffortRepository.findOne({
        where: {
          description: element.PreviousEffort3,
        },
      });
      if (previousEffort?.id) {
        await this.selectedPreviousEffortRepository.save({
          codeNumber: element.CodeNumber,
          previousEffort,
        });
      } else {
        previousEffortMissingCounter++;
      }
      previousEffort = await this.previousEffortRepository.findOne({
        where: {
          description: element.PreviousEffort4,
        },
      });
      if (previousEffort?.id) {
        await this.selectedPreviousEffortRepository.save({
          codeNumber: element.CodeNumber,
          previousEffort,
        });
      } else {
        previousEffortMissingCounter++;
      }
      if (previousEffortMissingCounter === 4) {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Other Ongoing Effort...');
      let otherOngoingEffortMissingCounter = 0;
      let otherOngoingEffort = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element.OtherOngoingEffort1,
        },
      });
      if (otherOngoingEffort?.id) {
        await this.selectedOtherOngoingEffortRepository.save({
          codeNumber: element.CodeNumber,
          otherOngoingEffort,
        });
      } else {
        otherOngoingEffortMissingCounter++;
      }
      otherOngoingEffort = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element.OtherOngoingEffort2,
        },
      });
      if (otherOngoingEffort?.id) {
        await this.selectedOtherOngoingEffortRepository.save({
          codeNumber: element.CodeNumber,
          otherOngoingEffort,
        });
      } else {
        otherOngoingEffortMissingCounter++;
      }
      otherOngoingEffort = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element.OtherOngoingEffort3,
        },
      });
      if (otherOngoingEffort?.id) {
        await this.selectedOtherOngoingEffortRepository.save({
          codeNumber: element.CodeNumber,
          otherOngoingEffort,
        });
      } else {
        otherOngoingEffortMissingCounter++;
      }
      otherOngoingEffort = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element.OtherOngoingEffort4,
        },
      });
      if (otherOngoingEffort?.id) {
        await this.selectedOtherOngoingEffortRepository.save({
          codeNumber: element.CodeNumber,
          otherOngoingEffort,
        });
      } else {
        otherOngoingEffortMissingCounter++;
      }
      if (otherOngoingEffortMissingCounter === 4) {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Family Constellation...');
      let familyConstellationAdult =
        await this.familyConstellationAdultRepository.findOne({
          where: {
            description: element.FamilyConstellation,
          },
        });
      if (familyConstellationAdult?.id) {
        await this.selectedFamilyConstellationAdultRepository.save({
          codeNumber: element.CodeNumber,
          familyConstellationAdult,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Education Level...');
      let educationLevel = await this.educationLevelRepository.findOne({
        where: {
          description: element.EducationLevel,
        },
      });
      if (educationLevel?.id) {
        await this.selectedEducationLevelRepository.save({
          codeNumber: element.CodeNumber,
          educationLevel,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Employment...');
      let employment = await this.employmentRepository.findOne({
        where: {
          description: element.Employment,
        },
      });
      if (employment?.id) {
        await this.selectedEmploymentRepository.save({
          codeNumber: element.CodeNumber,
          employment,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  During Operation...');
      let duringOperation = await this.duringOperationRepository.findOne({
        where: {
          description: element.DuringOperation,
        },
      });
      if (duringOperation?.id) {
        await this.selectedDuringOperationRepository.save({
          codeNumber: element.CodeNumber,
          duringOperation,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Action Assignment...');
      let actionAssignmentMissingCounter = 0;
      let actionAssignment = await this.actionAssignmentRepository.findOne({
        where: {
          description: element.ActionAssignment1,
        },
      });
      if (actionAssignment?.id) {
        await this.selectedActionAssignmentRepository.save({
          codeNumber: element.CodeNumber,
          actionAssignment,
        });
      } else {
        actionAssignmentMissingCounter++;
      }
      actionAssignment = await this.actionAssignmentRepository.findOne({
        where: {
          description: element.ActionAssignment2,
        },
      });
      if (actionAssignment?.id) {
        await this.selectedActionAssignmentRepository.save({
          codeNumber: element.CodeNumber,
          actionAssignment,
        });
      } else {
        actionAssignmentMissingCounter++;
      }
      actionAssignment = await this.actionAssignmentRepository.findOne({
        where: {
          description: element.ActionAssignment3,
        },
      });
      if (actionAssignment?.id) {
        await this.selectedActionAssignmentRepository.save({
          codeNumber: element.CodeNumber,
          actionAssignment,
        });
      } else {
        actionAssignmentMissingCounter++;
      }
      if (actionAssignmentMissingCounter === 3) {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Establish Diagnose...');
      let establishDiagnoseMissingCounter = 0;
      let establishDiagnose = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element.EstablishDiagnose1,
        },
      });
      if (establishDiagnose?.id) {
        await this.selectedEstablishDiagnoseRepository.save({
          codeNumber: element.CodeNumber,
          establishDiagnose,
        });
      } else {
        establishDiagnoseMissingCounter++;
      }
      establishDiagnose = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element.EstablishDiagnose2,
        },
      });
      if (establishDiagnose?.id) {
        await this.selectedEstablishDiagnoseRepository.save({
          codeNumber: element.CodeNumber,
          establishDiagnose,
        });
      } else {
        establishDiagnoseMissingCounter++;
      }
      establishDiagnose = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element.EstablishDiagnose3,
        },
      });
      if (establishDiagnose?.id) {
        await this.selectedEstablishDiagnoseRepository.save({
          codeNumber: element.CodeNumber,
          establishDiagnose,
        });
      } else {
        establishDiagnoseMissingCounter++;
      }
      establishDiagnose = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element.EstablishDiagnose4,
        },
      });
      if (establishDiagnose?.id) {
        await this.selectedEstablishDiagnoseRepository.save({
          codeNumber: element.CodeNumber,
          establishDiagnose,
        });
      } else {
        establishDiagnoseMissingCounter++;
      }
      if (establishDiagnoseMissingCounter === 4) {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  TFS & ORS 0 Month...');
      if (Number(element.TFS0Month) > 0 && Number(element.VAS0Month)) {
        await this.adultScoreRepository.save({
          codeNumber: element.CodeNumber,
          person: 1,
          occasion: 1,
          date: dayjs(backgroundData.date).format('YYYY-MM-DD'),
          score15: Number(element.TFS0Month),
          ors: Number(element.VAS0Month),
        });
      }
      console.log('  TFS & ORS 6 Month...');
      if (Number(element.TFS6Month) > 0 && Number(element.VAS6Month)) {
        await this.adultScoreRepository.save({
          codeNumber: element.CodeNumber,
          person: 1,
          occasion: 2,
          date: dayjs(backgroundData.date).add(6, 'month').format('YYYY-MM-DD'),
          score15: Number(element.TFS6Month),
          ors: Number(element.VAS6Month),
        });
      }
      console.log('  TFS & ORS 12 Month...');
      if (Number(element.TFS12Month) > 0 && Number(element.VAS12Month)) {
        await this.adultScoreRepository.save({
          codeNumber: element.CodeNumber,
          person: 1,
          occasion: 3,
          date: dayjs(backgroundData.date)
            .add(12, 'month')
            .format('YYYY-MM-DD'),
          score15: Number(element.TFS12Month),
          ors: Number(element.VAS12Month),
        });
      }
    }
  }
  //Important Events Vux
  async seedImportantEventVux(): Promise<void> {
    console.log(' Change Over...');
    /* await this.changeOverRepository.delete({});
    await this.changeOverRepository.save(changeOverSeedData); */
    for (let index = 0; index < changeOverSeedData.length; index++) {
      const element = changeOverSeedData[index];
      const found = await this.changeOverRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.changeOverRepository.save(element);
      }
    }

    console.log(' Change Live...');
    /* await this.changeLiveRepository.delete({});
    await this.changeLiveRepository.save(changeLiveSeedData); */
    for (let index = 0; index < changeLiveSeedData.length; index++) {
      const element = changeLiveSeedData[index];
      const found = await this.changeLiveRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.changeLiveRepository.save(element);
      }
    }

    console.log(' Investigation Out...');
    /* await this.investigationOutRepository.delete({});
    await this.investigationOutRepository.save(investigationOutSeedData); */
    for (let index = 0; index < investigationOutSeedData.length; index++) {
      const element = investigationOutSeedData[index];
      const found = await this.investigationOutRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.investigationOutRepository.save(element);
      }
    }

    console.log(' Other Initiative...');
    /* await this.otherInitiativeRepository.delete({});
    await this.otherInitiativeRepository.save(otherInitiativeSeedData); */
    for (let index = 0; index < otherInitiativeSeedData.length; index++) {
      const element = otherInitiativeSeedData[index];
      const found = await this.otherInitiativeRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.otherInitiativeRepository.save(element);
      }
    }
  }
  //Background Data Vux
  async seedBackgroundDataVux(): Promise<void> {
    console.log(' Gender...');
    /* await this.genderAdultRepository.delete({});
    await this.genderAdultRepository.save(genderAdultSeedData); */
    for (let index = 0; index < genderAdultSeedData.length; index++) {
      const element = genderAdultSeedData[index];
      const found = await this.genderAdultRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.genderAdultRepository.save(element);
      }
    }

    console.log(' Problem Area...');
    /* await this.problemAreaAdultRepository.delete({});
    await this.problemAreaAdultRepository.save(problemAreaAdultSeedData); */
    for (let index = 0; index < problemAreaAdultSeedData.length; index++) {
      const element = problemAreaAdultSeedData[index];
      const found = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.problemAreaAdultRepository.save(element);
      }
    }

    console.log(' Previous Effort...');
    /* await this.previousEffortRepository.delete({});
    await this.previousEffortRepository.save(previousEffortSeedData); */
    for (let index = 0; index < previousEffortSeedData.length; index++) {
      const element = previousEffortSeedData[index];
      const found = await this.previousEffortRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.previousEffortRepository.save(element);
      }
    }

    console.log(' Other Ongoing Effort...');
    /* await this.otherOngoingEffortRepository.delete({});
    await this.otherOngoingEffortRepository.save(otherOngoingEffortSeedData); */
    for (let index = 0; index < otherOngoingEffortSeedData.length; index++) {
      const element = otherOngoingEffortSeedData[index];
      const found = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.otherOngoingEffortRepository.save(element);
      }
    }

    console.log(' Family Constellation Adult...');
    /* await this.familyConstellationAdultRepository.save(
      familyConstellationAdultSeedData,
    ); */
    for (
      let index = 0;
      index < familyConstellationAdultSeedData.length;
      index++
    ) {
      const element = familyConstellationAdultSeedData[index];
      const found = await this.familyConstellationAdultRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.familyConstellationAdultRepository.save(element);
      }
    }

    console.log(' Education Level...');
    /* await this.educationLevelRepository.delete({});
    await this.educationLevelRepository.save(educationLevelSeedData); */
    for (let index = 0; index < educationLevelSeedData.length; index++) {
      const element = educationLevelSeedData[index];
      const found = await this.educationLevelRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.educationLevelRepository.save(element);
      }
    }

    console.log(' Employment...');
    /* await this.employmentRepository.delete({});
    await this.employmentRepository.save(employmentSeedData); */
    for (let index = 0; index < employmentSeedData.length; index++) {
      const element = employmentSeedData[index];
      const found = await this.employmentRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.employmentRepository.save(element);
      }
    }

    console.log(' During Operation...');
    /* await this.duringOperationRepository.delete({});
    await this.duringOperationRepository.save(duringOperationSeedData); */
    for (let index = 0; index < duringOperationSeedData.length; index++) {
      const element = duringOperationSeedData[index];
      const found = await this.duringOperationRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.duringOperationRepository.save(element);
      }
    }

    console.log(' Action Assignment...');
    /* await this.actionAssignmentRepository.delete({});
    await this.actionAssignmentRepository.save(actionAssignmentSeedData); */
    for (let index = 0; index < actionAssignmentSeedData.length; index++) {
      const element = actionAssignmentSeedData[index];
      const found = await this.actionAssignmentRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.actionAssignmentRepository.save(element);
      }
    }

    console.log(' Establish Diagnoses...');
    /* await this.establishDiagnoseRepository.delete({});
    await this.establishDiagnoseRepository.save(establishDiagnoseSeedData); */
    for (let index = 0; index < establishDiagnoseSeedData.length; index++) {
      const element = establishDiagnoseSeedData[index];
      const found = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element?.description,
        },
      });
      if (!found?.id) {
        await this.establishDiagnoseRepository.save(element);
      }
    }
  }
}
