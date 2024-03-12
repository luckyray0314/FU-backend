import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EducationVh1Entity } from 'src/background-data/education-vh1/entities/education-vh1.entity';
import { EducationVh2Entity } from 'src/background-data/education-vh2/entities/education-vh2.entity';
import { EmploymentVh1Entity } from 'src/background-data/employment-vh1/entities/employment-vh1.entity';
import { EmploymentVh2Entity } from 'src/background-data/employment-vh2/entities/employment-vh2.entity';
import { EstablishedDiagnosesEntity } from 'src/background-data/established-diagnoses/entities/established-diagnoses.entity';
import { FamilyConstellationEntity } from 'src/background-data/family-constellation/entities/family-constellation.entity';
import { GenderEntity } from 'src/background-data/gender/entities/gender.entity';
import { InterpreterRequiredEntity } from 'src/background-data/interpreter-required/entities/interpreter-required.entity';
import { OtherInterventionsEntity } from 'src/background-data/other-interventions/entities/other-interventions.entity';
import { PreviousInterventionEntity } from 'src/background-data/previous-intervention/entities/previous-intervention.entity';
import { ProblemAreaEntity } from 'src/background-data/problem-area/entities/problem-area.entity';
import { OtherInterventionsStartedEntity } from 'src/important-events/otherinterventions-started/entities/otherinterventions-started.entity';
import { DuringInterventionEntity } from 'src/important-events/during-intervention/entities/during-intervention.entity';
import { DuringPastEntity } from 'src/important-events/during-past/entities/during-past.entity';
import { ChildSchoolEntity } from 'src/important-events/child-school/entities/child-school.entity';
import { ReasonForUpdateEntity } from 'src/background-data/reason-for-update/entities/reason-for-update.entity';
import { SchoolUniformEntity } from 'src/background-data/school-uniform/entities/school-uniform.entity';
import { TypeOfEffortEntity } from 'src/background-data/type-of-effort/entities/type-of-effort.entity';
import { WhoParticipatesEntity } from 'src/background-data/who-participates/entities/who-participates.entity';
import { InterventionPeriodEntity } from 'src/follow-up-survey/intervention-period/entities/intervention-period.entity';
import { InterventionProgressEntity } from 'src/follow-up-survey/intervention-progress/entities/intervention-progress.entity';
import { ReasonForTerminationEntity } from 'src/follow-up-survey/reason-for-termination/entities/reason-for-termination.entity';
import { TimeConsumptionEntity } from 'src/follow-up-survey/time-consumption/entities/time-consumption.entity';
import { Repository } from 'typeorm';

import { SelectedEducationVh1Entity } from 'src/background-data/education-vh1/entities/selected-education-vh1.entity';
import { SelectedEducationVh2Entity } from 'src/background-data/education-vh2/entities/selected-education-vh2.entity';
import { SelectedEmploymentVh1Entity } from 'src/background-data/employment-vh1/entities/selected-employment-vh1.entity';
import { SelectedEmploymentVh2Entity } from 'src/background-data/employment-vh2/entities/selected-employment-vh2.entity';
import { SelectedEstablishedDiagnosesEntity } from 'src/background-data/established-diagnoses/entities/selected-established-diagnoses.entity';
import { SelectedFamilyConstellationEntity } from 'src/background-data/family-constellation/entities/selected-family-constellation.entity';
import { SelectedGenderEntity } from 'src/background-data/gender/entities/selected-gender.entity';
import { SelectedInterpreterRequiredEntity } from 'src/background-data/interpreter-required/entities/selected-interpreter-required.entity';
import { SelectedOtherInterventionsEntity } from 'src/background-data/other-interventions/entities/selected-other-interventions.entity';
import { SelectedPreviousInterventionEntity } from 'src/background-data/previous-intervention/entities/selected-previous-intervention.entity';
import { SelectedProblemAreaEntity } from 'src/background-data/problem-area/entities/selected-problem-area.entity';
import { SelectedOtherInterventionsStartedEntity } from 'src/important-events/otherinterventions-started/entities/selected-otherinterventions-started.entity';
import { SelectedDuringInterventionEntity } from 'src/important-events/during-intervention/entities/selected-during-intervention.entity';
import { SelectedDuringPastEntity } from 'src/important-events/during-past/entities/selected-during-past.entity';
import { SelectedChildSchoolEntity } from 'src/important-events/child-school/entities/selected-child-school.entity';
import { SelectedReasonForUpdateEntity } from 'src/background-data/reason-for-update/entities/selected-reason-for-update.entity';
import { SelectedSchoolUniformEntity } from 'src/background-data/school-uniform/entities/selected-school-uniform.entity';
import { SelectedTypeOfEffortEntity } from 'src/background-data/type-of-effort/entities/selected-type-of-effort.entity';
import { SelectedWhoParticipatesEntity } from 'src/background-data/who-participates/entities/selected-who-participates.entity';
import { SelectedInterventionPeriodEntity } from 'src/follow-up-survey/intervention-period/entities/selected-intervention-period.entity';
import { SelectedInterventionProgressEntity } from 'src/follow-up-survey/intervention-progress/entities/selected-intervention-progress.entity';
import { SelectedReasonForTerminationEntity } from 'src/follow-up-survey/reason-for-termination/entities/selected-reason-for-termination.entity';
import { SelectedTimeConsumptionEntity } from 'src/follow-up-survey/time-consumption/entities/selected-time-consumption.entity';
import {
  educationVh1SeedData,
  educationVh2SeedData,
  employmentVh1SeedData,
  employmentVh2SeedData,
  establishedDiagnosesSeedData,
  familyConstellationSeedData,
  genderSeedData,
  interpreterRequiredSeedData,
  interventionPeriodSeedData,
  interventionProgressSeedData,
  otherInterventionsSeedData,
  previousInterventionSeedData,
  problemAreaSeedData,
  otherInterventionsStartedSeedData,
  duringInterventionSeedData,
  duringPastSeedData,
  childSchoolSeedData,
  reasonForTerminationSeedData,
  reasonForUpdateSeedData,
  schoolUniformSeedData,
  timeConsumptionSeedData,
  typeOfEffortSeedData,
  whoParticipatesSeedData,
  changeAccomodationSeedData,
  changeEmploymentVh1SeedData,
  changeEmploymentVh2SeedData,
} from '../../core/constants/seed.constant';

import { ScoreEntity } from 'src/score/entities/score.entity';
import { ChangeAccomodationEntity } from 'src/important-events/change-accomodation/entities/change-accomodation.entity';
import { SelectedChangeAccomodationEntity } from 'src/important-events/change-accomodation/entities/selected-change-accomodation.entity';
import { ChangeEmploymentVh1Entity } from 'src/important-events/change-employment-vh1/entities/change-employment-vh1.entity';
import { SelectedChangeEmploymentVh1Entity } from 'src/important-events/change-employment-vh1/entities/selected-change-employment-vh1.entity';
import { ChangeEmploymentVh2Entity } from 'src/important-events/change-employment-vh2/entities/change-employment-vh2.entity';
import { SelectedChangeEmploymentVh2Entity } from 'src/important-events/change-employment-vh2/entities/selected-change-employment-vh2.entity';
import { CloseStatusEntity } from 'src/close-status/child/entities/close.status.child.entity';
import { BackgroundMetadataEntity } from 'src/background-data/background-metadata.entity';
import dayjs from 'dayjs';
import { SurveyStatus } from 'src/core/enums/survey-status';
//JSON Files
import bofBortfallData from 'src/core/constants/json/bof/bortfall.json';
import bofExcelData from 'src/core/constants/json/bof/bof-excel.json';
import bofExportedData from 'src/core/constants/json/bof/exported.json';

@Injectable()
export class SeedBofService {
  constructor(
    @InjectRepository(ScoreEntity)
    private readonly scoreRepository: Repository<ScoreEntity>,

    @InjectRepository(CloseStatusEntity)
    private readonly closeStatusRepository: Repository<CloseStatusEntity>,

    @InjectRepository(BackgroundMetadataEntity)
    private readonly backgroundMetadataRepository: Repository<BackgroundMetadataEntity>,

    @InjectRepository(GenderEntity)
    private readonly genderRepository: Repository<GenderEntity>,

    @InjectRepository(SelectedGenderEntity)
    private readonly selectedGenderRepository: Repository<SelectedGenderEntity>,

    @InjectRepository(EducationVh1Entity)
    private readonly educationVh1Repository: Repository<EducationVh1Entity>,
    @InjectRepository(SelectedEducationVh1Entity)
    private readonly selectedEducationVh1Repository: Repository<SelectedEducationVh1Entity>,

    @InjectRepository(EducationVh2Entity)
    private readonly educationVh2Repository: Repository<EducationVh2Entity>,
    @InjectRepository(SelectedEducationVh2Entity)
    private readonly selectedEducationVh2Repository: Repository<SelectedEducationVh2Entity>,

    @InjectRepository(EmploymentVh1Entity)
    private readonly employmentVh1Repository: Repository<EmploymentVh1Entity>,
    @InjectRepository(SelectedEmploymentVh1Entity)
    private readonly selectedEmploymentVh1Repository: Repository<SelectedEmploymentVh1Entity>,

    @InjectRepository(EmploymentVh2Entity)
    private readonly employmentVh2Repository: Repository<EmploymentVh2Entity>,
    @InjectRepository(SelectedEmploymentVh2Entity)
    private readonly selectedEmploymentVh2Repository: Repository<SelectedEmploymentVh2Entity>,

    @InjectRepository(EstablishedDiagnosesEntity)
    private readonly establishedDiagnosesRepository: Repository<EstablishedDiagnosesEntity>,
    @InjectRepository(SelectedEstablishedDiagnosesEntity)
    private readonly selectedEstablishedDiagnosesRepository: Repository<SelectedEstablishedDiagnosesEntity>,

    @InjectRepository(FamilyConstellationEntity)
    private readonly familyConstellationRepository: Repository<FamilyConstellationEntity>,
    @InjectRepository(SelectedFamilyConstellationEntity)
    private readonly selectedFamilyConstellationRepository: Repository<SelectedFamilyConstellationEntity>,

    @InjectRepository(InterpreterRequiredEntity)
    private readonly interpreterRequiredRepository: Repository<InterpreterRequiredEntity>,
    @InjectRepository(SelectedInterpreterRequiredEntity)
    private readonly selectedInterpreterRequiredRepository: Repository<SelectedInterpreterRequiredEntity>,

    @InjectRepository(OtherInterventionsEntity)
    private readonly otherInterventionsRepository: Repository<OtherInterventionsEntity>,
    @InjectRepository(SelectedOtherInterventionsEntity)
    private readonly selectedOtherInterventionsRepository: Repository<SelectedOtherInterventionsEntity>,

    @InjectRepository(PreviousInterventionEntity)
    private readonly previousInterventionRepository: Repository<PreviousInterventionEntity>,
    @InjectRepository(SelectedPreviousInterventionEntity)
    private readonly selectedPreviousInterventionRepository: Repository<SelectedPreviousInterventionEntity>,

    @InjectRepository(ProblemAreaEntity)
    private readonly problemAreaRepository: Repository<ProblemAreaEntity>,
    @InjectRepository(SelectedProblemAreaEntity)
    private readonly selectedProblemAreaRepository: Repository<SelectedProblemAreaEntity>,

    @InjectRepository(OtherInterventionsStartedEntity)
    private readonly otherInterventionsStartedRepository: Repository<OtherInterventionsStartedEntity>,
    @InjectRepository(SelectedOtherInterventionsStartedEntity)
    private readonly selectedOtherInterventionsStartedRepository: Repository<SelectedOtherInterventionsStartedEntity>,

    @InjectRepository(DuringInterventionEntity)
    private readonly duringInterventionRepository: Repository<DuringInterventionEntity>,
    @InjectRepository(SelectedDuringInterventionEntity)
    private readonly selectedDuringInterventionRepository: Repository<SelectedDuringInterventionEntity>,

    @InjectRepository(DuringPastEntity)
    private readonly duringPastRepository: Repository<DuringPastEntity>,
    @InjectRepository(SelectedDuringPastEntity)
    private readonly selectedDuringPastRepository: Repository<SelectedDuringPastEntity>,

    @InjectRepository(ChildSchoolEntity)
    private readonly childSchoolRepository: Repository<ChildSchoolEntity>,
    @InjectRepository(SelectedChildSchoolEntity)
    private readonly selectedChildSchoolRepository: Repository<SelectedChildSchoolEntity>,

    @InjectRepository(ReasonForUpdateEntity)
    private readonly reasonForUpdateRepository: Repository<ReasonForUpdateEntity>,
    @InjectRepository(SelectedReasonForUpdateEntity)
    private readonly selectedReasonForUpdateRepository: Repository<SelectedReasonForUpdateEntity>,

    @InjectRepository(SchoolUniformEntity)
    private readonly schoolUniformRepository: Repository<SchoolUniformEntity>,
    @InjectRepository(SelectedSchoolUniformEntity)
    private readonly selectedSchoolUniformRepository: Repository<SelectedSchoolUniformEntity>,

    @InjectRepository(TypeOfEffortEntity)
    private readonly typeOfEffortRepository: Repository<TypeOfEffortEntity>,
    @InjectRepository(SelectedTypeOfEffortEntity)
    private readonly selectedTypeOfEffortRepository: Repository<SelectedTypeOfEffortEntity>,

    @InjectRepository(WhoParticipatesEntity)
    private readonly whoParticipatesRepository: Repository<WhoParticipatesEntity>,
    @InjectRepository(SelectedWhoParticipatesEntity)
    private readonly selectedWhoParticipatesRepository: Repository<SelectedWhoParticipatesEntity>,

    @InjectRepository(InterventionPeriodEntity)
    private readonly interventionPeriodRepository: Repository<InterventionPeriodEntity>,
    @InjectRepository(SelectedInterventionPeriodEntity)
    private readonly selectedInterventionPeriodRepository: Repository<SelectedInterventionPeriodEntity>,

    @InjectRepository(InterventionProgressEntity)
    private readonly interventionProgressRepository: Repository<InterventionProgressEntity>,
    @InjectRepository(SelectedInterventionProgressEntity)
    private readonly selectedInterventionProgressRepository: Repository<SelectedInterventionProgressEntity>,

    @InjectRepository(ReasonForTerminationEntity)
    private readonly reasonForTerminationRepository: Repository<ReasonForTerminationEntity>,
    @InjectRepository(SelectedReasonForTerminationEntity)
    private readonly selectedReasonForTerminationRepository: Repository<SelectedReasonForTerminationEntity>,

    @InjectRepository(TimeConsumptionEntity)
    private readonly timeConsumptionRepository: Repository<TimeConsumptionEntity>,
    @InjectRepository(SelectedTimeConsumptionEntity)
    private readonly selectedTimeConsumptionRepository: Repository<SelectedTimeConsumptionEntity>,

    @InjectRepository(ChangeAccomodationEntity)
    private readonly changeAccomodationRepository: Repository<ChangeAccomodationEntity>,
    @InjectRepository(SelectedChangeAccomodationEntity)
    private readonly selectedChangeAccomodationRepository: Repository<SelectedChangeAccomodationEntity>,

    @InjectRepository(ChangeEmploymentVh1Entity)
    private readonly changeEmploymentVh1Repository: Repository<ChangeEmploymentVh1Entity>,
    @InjectRepository(SelectedChangeEmploymentVh1Entity)
    private readonly selectedChangeEmploymentsVh1Repository: Repository<SelectedChangeEmploymentVh1Entity>,

    @InjectRepository(ChangeEmploymentVh2Entity)
    private readonly changeEmploymentVh2Repository: Repository<ChangeEmploymentVh2Entity>,
    @InjectRepository(SelectedChangeEmploymentVh2Entity)
    private readonly selectedChangeEmploymentsVh2Repository: Repository<SelectedChangeEmploymentVh2Entity>,
  ) {}

  //Bof
  async seedBofData(): Promise<void> {
    console.log(' Seed Bortfall...');
    await this.seedBofBortfallData();
    console.log(' Seed Excel...');
    await this.seedBofExcelData();
    console.log(' Seed Exported from DB...');
    await this.seedBofExportedData();
  }
  async clearBofData(): Promise<void> {
    await this.closeStatusRepository.delete({});
    await this.backgroundMetadataRepository.delete({});
    await this.selectedGenderRepository.delete({});
    await this.selectedReasonForUpdateRepository.delete({});
    await this.selectedProblemAreaRepository.delete({});
    await this.selectedPreviousInterventionRepository.delete({});
    await this.selectedOtherInterventionsRepository.delete({});
    await this.selectedFamilyConstellationRepository.delete({});
    await this.selectedWhoParticipatesRepository.delete({});
    await this.selectedEducationVh1Repository.delete({});
    await this.selectedEducationVh2Repository.delete({});
    await this.selectedEmploymentVh1Repository.delete({});
    await this.selectedEmploymentVh2Repository.delete({});
    await this.selectedInterpreterRequiredRepository.delete({});
    await this.selectedTypeOfEffortRepository.delete({});
    await this.selectedEstablishedDiagnosesRepository.delete({});
    await this.selectedSchoolUniformRepository.delete({});
    await this.selectedOtherInterventionsStartedRepository.delete({});
    await this.selectedDuringInterventionRepository.delete({});
    await this.selectedDuringPastRepository.delete({});
    await this.selectedChildSchoolRepository.delete({});
    await this.selectedChangeAccomodationRepository.delete({});
    await this.selectedChangeEmploymentsVh1Repository.delete({});
    await this.selectedChangeEmploymentsVh2Repository.delete({});
    await this.selectedInterventionPeriodRepository.delete({});
    await this.selectedInterventionProgressRepository.delete({});
    await this.selectedTimeConsumptionRepository.delete({});
    await this.selectedReasonForTerminationRepository.delete({});
    await this.scoreRepository.delete({});
  }
  async seedBofBortfallData(): Promise<void> {
    for (let index = 0; index < bofBortfallData.length; index++) {
      const element = bofBortfallData[index];
      console.log(`  ${element.CodeNumber}...`);
      await this.closeStatusRepository.save({
        codeNumber: element.CodeNumber,
        processor: 'v1admin',
        isClosed: 'true',
        isAbsent: 'true',
      });
    }
  }
  async seedBofExcelData(): Promise<void> {
    for (let index = 0; index < bofExcelData.length; index++) {
      const element = bofExcelData[index];
      try {
        let isMissingBackgroundData: boolean = false;
        console.log(`  ${element.codeNumber}...`);
        let closeStatus = await this.closeStatusRepository.findOne({
          where: {
            codeNumber: element.codeNumber,
          },
        });
        if (closeStatus?.codeNumber) {
          closeStatus = await this.closeStatusRepository.save({
            isChild: element.person == '1' ? 'true' : 'false',
            isGuardianOne: element.person == '2' ? 'true' : 'false',
            isGuardianTwo: element.person == '3' ? 'true' : 'false',
          });
        } else {
          closeStatus = await this.closeStatusRepository.save({
            codeNumber: element.codeNumber,
            processor: element.processor || 'v1admin',
            isClosed: 'false',
            isChild: element.person == '1' ? 'true' : 'false',
            isGuardianOne: element.person == '2' ? 'true' : 'false',
            isGuardianTwo: element.person == '3' ? 'true' : 'false',
          });
        }
        //console.log('  Background Metadata...');
        let backgroundMetadata;
        if (element.yearofbirth) {
          backgroundMetadata = await this.backgroundMetadataRepository.save({
            codeNumber: element.codeNumber,
            date: element.date,
            yearOfBirth: Number(element.yearofbirth),
            country: element.countryOfBirth,
          });
        } else {
          backgroundMetadata = await this.backgroundMetadataRepository.save({
            codeNumber: element.codeNumber,
            date: element.date,
            yearOfBirth: null,
            country: element.countryOfBirth,
          });
        }
        //console.log('  Gender...');
        const gender = await this.genderRepository.findOne({
          where: {
            description: element.gender,
          },
        });
        if (gender?.id) {
          await this.selectedGenderRepository.save({
            codeNumber: element.codeNumber,
            gender: gender,
          });
        } else {
          console.log(`   Missing gender... ${element.gender}`);
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Reason For Update...');
        const reasonForUpdate = await this.reasonForUpdateRepository.findOne({
          where: {
            description: element.reasonForUpdate,
          },
        });
        if (reasonForUpdate?.id) {
          await this.selectedReasonForUpdateRepository.save({
            codeNumber: element.codeNumber,
            reasonForUpdate: reasonForUpdate,
          });
        } else {
          console.log(
            `   Missing reason for update... ${element.reasonForUpdate}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Problem Area...');
        let problemAreaMissingCounter = 0;
        let problemArea = await this.problemAreaRepository.findOne({
          where: {
            description: element.problemArea1,
          },
        });
        if (problemArea?.id) {
          await this.selectedProblemAreaRepository.save({
            codeNumber: element.codeNumber,
            problemArea: problemArea,
          });
        } else {
          console.log(`   Missing problema area 1... ${element.problemArea1}`);
          problemAreaMissingCounter++;
        }
        problemArea = await this.problemAreaRepository.findOne({
          where: {
            description: element.problemArea2,
          },
        });
        if (problemArea?.id) {
          await this.selectedProblemAreaRepository.save({
            codeNumber: element.codeNumber,
            problemArea: problemArea,
          });
        } else {
          console.log(`   Missing problema area 2... ${element.problemArea2}`);
          problemAreaMissingCounter++;
        }
        problemArea = await this.problemAreaRepository.findOne({
          where: {
            description: element.problemArea3,
          },
        });
        if (problemArea?.id) {
          await this.selectedProblemAreaRepository.save({
            codeNumber: element.codeNumber,
            problemArea: problemArea,
          });
        } else {
          console.log(`   Missing problema area 3... ${element.problemArea3}`);
          problemAreaMissingCounter++;
        }
        problemArea = await this.problemAreaRepository.findOne({
          where: {
            description: element.problemArea4,
          },
        });
        if (problemArea?.id) {
          await this.selectedProblemAreaRepository.save({
            codeNumber: element.codeNumber,
            problemArea: problemArea,
          });
        } else {
          console.log(`   Missing problema area 4... ${element.problemArea4}`);
          problemAreaMissingCounter++;
        }
        if (problemAreaMissingCounter === 4) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Previous Intervention...');
        let previousInterventionMissingCounter = 0;
        let previousIntervention =
          await this.previousInterventionRepository.findOne({
            where: {
              description: element.previousIntervention1,
            },
          });
        if (previousIntervention?.id) {
          await this.selectedPreviousInterventionRepository.save({
            codeNumber: element.codeNumber,
            previousIntervention: previousIntervention,
          });
        } else {
          console.log(
            `   Missing Previous Intervention 1... ${element.previousIntervention1}`,
          );
          previousInterventionMissingCounter++;
        }
        previousIntervention =
          await this.previousInterventionRepository.findOne({
            where: {
              description: element.previousIntervention2,
            },
          });
        if (previousIntervention?.id) {
          await this.selectedPreviousInterventionRepository.save({
            codeNumber: element.codeNumber,
            previousIntervention: previousIntervention,
          });
        } else {
          console.log(
            `   Missing Previous Intervention 2... ${element.previousIntervention2}`,
          );
          previousInterventionMissingCounter++;
        }
        previousIntervention =
          await this.previousInterventionRepository.findOne({
            where: {
              description: element.previousIntervention3,
            },
          });
        if (previousIntervention?.id) {
          await this.selectedPreviousInterventionRepository.save({
            codeNumber: element.codeNumber,
            previousIntervention: previousIntervention,
          });
        } else {
          console.log(
            `   Missing Previous Intervention 3... ${element.previousIntervention3}`,
          );
          previousInterventionMissingCounter++;
        }
        if (previousInterventionMissingCounter === 3) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Other Intervention...');
        let otherInterventionMissingCounter = 0;
        let otherIntervention = await this.otherInterventionsRepository.findOne(
          {
            where: {
              description: element.otherInterventions1,
            },
          },
        );
        if (otherIntervention?.id) {
          await this.selectedOtherInterventionsRepository.save({
            codeNumber: element.codeNumber,
            otherIntervention: otherIntervention,
          });
        } else {
          console.log(
            `   Missing Other Intervention 1... ${element.otherInterventions1}`,
          );
          otherInterventionMissingCounter++;
        }
        otherIntervention = await this.otherInterventionsRepository.findOne({
          where: {
            description: element.otherInterventions2,
          },
        });
        if (previousIntervention?.id) {
          await this.selectedOtherInterventionsRepository.save({
            codeNumber: element.codeNumber,
            otherIntervention: otherIntervention,
          });
        } else {
          console.log(
            `   Missing Other Intervention 2... ${element.otherInterventions2}`,
          );
          otherInterventionMissingCounter++;
        }
        otherIntervention = await this.otherInterventionsRepository.findOne({
          where: {
            description: element.otherInterventions3,
          },
        });
        if (otherIntervention?.id) {
          await this.selectedOtherInterventionsRepository.save({
            codeNumber: element.codeNumber,
            otherIntervention: otherIntervention,
          });
        } else {
          console.log(
            `   Missing Other Intervention 3... ${element.otherInterventions3}`,
          );
          otherInterventionMissingCounter++;
        }
        if (otherInterventionMissingCounter === 3) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Family Constellation...');
        const familyConstellation =
          await this.familyConstellationRepository.findOne({
            where: {
              description: element.familyConstellation,
            },
          });
        if (familyConstellation?.id) {
          await this.selectedFamilyConstellationRepository.save({
            codeNumber: element.codeNumber,
            familyConstellation: familyConstellation,
          });
        } else {
          console.log(
            `   Missing Family Constellation... ${element.familyConstellation}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Who Participates...');
        let whoParticipatesMissingCounter = 0;
        let whoParticipates = await this.whoParticipatesRepository.findOne({
          where: {
            description: element.whoParticipates1,
          },
        });
        if (whoParticipates?.id) {
          await this.selectedWhoParticipatesRepository.save({
            codeNumber: element.codeNumber,
            whoParticipates: whoParticipates,
          });
        } else {
          console.log(
            `   Missing Who Participates 1... ${element.whoParticipates1}`,
          );
          whoParticipatesMissingCounter++;
        }
        whoParticipates = await this.whoParticipatesRepository.findOne({
          where: {
            description: element.whoParticipates2,
          },
        });
        if (whoParticipates?.id) {
          await this.selectedWhoParticipatesRepository.save({
            codeNumber: element.codeNumber,
            whoParticipates: whoParticipates,
          });
        } else {
          console.log(
            `   Missing Who Participates 2... ${element.whoParticipates2}`,
          );
          whoParticipatesMissingCounter++;
        }
        whoParticipates = await this.whoParticipatesRepository.findOne({
          where: {
            description: element.whoParticipates3,
          },
        });
        if (whoParticipates?.id) {
          await this.selectedWhoParticipatesRepository.save({
            codeNumber: element.codeNumber,
            whoParticipates: whoParticipates,
          });
        } else {
          console.log(
            `   Missing Who Participates 3... ${element.whoParticipates3}`,
          );
          whoParticipatesMissingCounter++;
        }
        whoParticipates = await this.whoParticipatesRepository.findOne({
          where: {
            description: element.whoParticipates4,
          },
        });
        if (whoParticipates?.id) {
          await this.selectedWhoParticipatesRepository.save({
            codeNumber: element.codeNumber,
            whoParticipates: whoParticipates,
          });
        } else {
          console.log(
            `   Missing Who Participates 4... ${element.whoParticipates4}`,
          );
          whoParticipatesMissingCounter++;
        }
        if (whoParticipatesMissingCounter === 4) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Education VH...');
        let educationVhMissingCounter = 0;
        let educationVh = await this.educationVh1Repository.findOne({
          where: {
            description: element.educationVh1,
          },
        });
        if (educationVh?.id) {
          await this.selectedEducationVh1Repository.save({
            codeNumber: element.codeNumber,
            educationVh1: educationVh,
          });
        } else {
          console.log(`   Missing Education VH1... ${element.educationVh1}`);
          educationVhMissingCounter++;
        }
        educationVh = await this.educationVh2Repository.findOne({
          where: {
            description: element.educationVh2,
          },
        });
        if (educationVh?.id) {
          await this.selectedEducationVh2Repository.save({
            codeNumber: element.codeNumber,
            educationVh2: educationVh,
          });
        } else {
          console.log(`   Missing Education VH2... ${element.educationVh2}`);
          educationVhMissingCounter++;
        }
        if (educationVhMissingCounter === 2) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Employment VH...');
        let employmentVhMissingCounter = 0;
        let employmentVh = await this.employmentVh1Repository.findOne({
          where: {
            description: element.employmentVh1,
          },
        });
        if (employmentVh?.id) {
          await this.selectedEmploymentVh1Repository.save({
            codeNumber: element.codeNumber,
            employmentVh1: employmentVh,
          });
        } else {
          console.log(`   Missing Employment VH1... ${element.employmentVh1}`);
          employmentVhMissingCounter++;
        }
        employmentVh = await this.employmentVh2Repository.findOne({
          where: {
            description: element.employmentVh2,
          },
        });
        if (employmentVh?.id) {
          await this.selectedEmploymentVh2Repository.save({
            codeNumber: element.codeNumber,
            employmentVh2: employmentVh,
          });
        } else {
          console.log(`   Missing Employment VH2... ${element.employmentVh2}`);
          employmentVhMissingCounter++;
        }
        if (employmentVhMissingCounter === 2) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Interpreter Required...');
        const interpreterRequired =
          await this.interpreterRequiredRepository.findOne({
            where: {
              description: element.interpreterRequired,
            },
          });
        if (interpreterRequired?.id) {
          await this.selectedInterpreterRequiredRepository.save({
            codeNumber: element.codeNumber,
            interpreterRequired: interpreterRequired,
          });
        } else {
          console.log(
            `   Missing Interpreter Required... ${element.interpreterRequired}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Type Of Effort...');
        let typeOfEffortMissingCounter = 0;
        let typeOfEffort = await this.typeOfEffortRepository.findOne({
          where: {
            description: element.typeOfEffort1,
          },
        });
        if (typeOfEffort?.id) {
          await this.selectedTypeOfEffortRepository.save({
            codeNumber: element.codeNumber,
            typeOfEffort: typeOfEffort,
          });
        } else {
          console.log(
            `   Missing Type Of Effort 1... ${element.typeOfEffort1}`,
          );
          typeOfEffortMissingCounter++;
        }
        typeOfEffort = await this.typeOfEffortRepository.findOne({
          where: {
            description: element.typeOfEffort2,
          },
        });
        if (typeOfEffort?.id) {
          await this.selectedTypeOfEffortRepository.save({
            codeNumber: element.codeNumber,
            typeOfEffort: typeOfEffort,
          });
        } else {
          console.log(
            `   Missing Type Of Effort 2... ${element.typeOfEffort2}`,
          );
          typeOfEffortMissingCounter++;
        }
        typeOfEffort = await this.typeOfEffortRepository.findOne({
          where: {
            description: element.typeOfEffort3,
          },
        });
        if (typeOfEffort?.id) {
          await this.selectedTypeOfEffortRepository.save({
            codeNumber: element.codeNumber,
            typeOfEffort: typeOfEffort,
          });
        } else {
          console.log(
            `   Missing Type Of Effort 3... ${element.typeOfEffort3}`,
          );
          typeOfEffortMissingCounter++;
        }
        typeOfEffort = await this.typeOfEffortRepository.findOne({
          where: {
            description: element.typeOfEffort4,
          },
        });
        if (typeOfEffort?.id) {
          await this.selectedTypeOfEffortRepository.save({
            codeNumber: element.codeNumber,
            typeOfEffort: typeOfEffort,
          });
        } else {
          console.log(
            `   Missing Type Of Effort 4... ${element.typeOfEffort4}`,
          );
          typeOfEffortMissingCounter++;
        }
        if (typeOfEffortMissingCounter === 4) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Established Diagnoses...');
        let establishedDiagnosesMissingCounter = 0;
        let establishedDiagnoses =
          await this.establishedDiagnosesRepository.findOne({
            where: {
              description: element.establishedDiagnoses1,
            },
          });
        if (establishedDiagnoses?.id) {
          await this.selectedEstablishedDiagnosesRepository.save({
            codeNumber: element.codeNumber,
            establishedDiagnoses: establishedDiagnoses,
          });
        } else {
          console.log(
            `   Missing Established Diagnoses 1... ${element.establishedDiagnoses1}`,
          );
          establishedDiagnosesMissingCounter++;
        }
        establishedDiagnoses =
          await this.establishedDiagnosesRepository.findOne({
            where: {
              description: element.establishedDiagnoses2,
            },
          });
        if (establishedDiagnoses?.id) {
          await this.selectedEstablishedDiagnosesRepository.save({
            codeNumber: element.codeNumber,
            establishedDiagnoses: establishedDiagnoses,
          });
        } else {
          console.log(
            `   Missing Established Diagnoses 2... ${element.establishedDiagnoses2}`,
          );
          establishedDiagnosesMissingCounter++;
        }
        establishedDiagnoses =
          await this.establishedDiagnosesRepository.findOne({
            where: {
              description: element.establishedDiagnoses3,
            },
          });
        if (establishedDiagnoses?.id) {
          await this.selectedEstablishedDiagnosesRepository.save({
            codeNumber: element.codeNumber,
            establishedDiagnoses: establishedDiagnoses,
          });
        } else {
          console.log(
            `   Missing Established Diagnoses 3... ${element.establishedDiagnoses3}`,
          );
          establishedDiagnosesMissingCounter++;
        }
        if (establishedDiagnosesMissingCounter === 3) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  School Uniform...');
        const schoolUniform = await this.schoolUniformRepository.findOne({
          where: {
            description: element.schoolUniform,
          },
        });
        if (schoolUniform?.id) {
          await this.selectedSchoolUniformRepository.save({
            codeNumber: element.codeNumber,
            schoolUniform: schoolUniform,
          });
        } else {
          console.log(`   Missing School Uniform... ${element.schoolUniform}`);
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Other Intervention Started...');
        let otherinterventionstartedMissingCounter = 0;
        let otherInterventionstarted =
          await this.otherInterventionsStartedRepository.findOne({
            where: {
              description: element.otherInterventionstarted1,
            },
          });
        if (otherInterventionstarted?.id) {
          await this.selectedOtherInterventionsStartedRepository.save({
            codeNumber: element.codeNumber,
            otherInterventionstarted: otherInterventionstarted,
          });
        } else {
          console.log(
            `   Missing Other Intervention Started 1... ${element.otherInterventionstarted1}`,
          );
          otherinterventionstartedMissingCounter++;
        }
        otherInterventionstarted =
          await this.otherInterventionsStartedRepository.findOne({
            where: {
              description: element.otherInterventionstarted2,
            },
          });
        if (otherInterventionstarted?.id) {
          await this.selectedOtherInterventionsStartedRepository.save({
            codeNumber: element.codeNumber,
            otherInterventionstarted: otherInterventionstarted,
          });
        } else {
          console.log(
            `   Missing Other Intervention Started 2... ${element.otherInterventionstarted2}`,
          );
          otherinterventionstartedMissingCounter++;
        }
        otherInterventionstarted =
          await this.otherInterventionsStartedRepository.findOne({
            where: {
              description: element.otherInterventionstarted3,
            },
          });
        if (otherInterventionstarted?.id) {
          await this.selectedOtherInterventionsStartedRepository.save({
            codeNumber: element.codeNumber,
            otherInterventionstarted: otherInterventionstarted,
          });
        } else {
          console.log(
            `   Missing Other Intervention Started 3... ${element.otherInterventionstarted3}`,
          );
          otherinterventionstartedMissingCounter++;
        }
        otherInterventionstarted =
          await this.otherInterventionsStartedRepository.findOne({
            where: {
              description: element.otherInterventionstarted4,
            },
          });
        if (otherInterventionstarted?.id) {
          await this.selectedOtherInterventionsStartedRepository.save({
            codeNumber: element.codeNumber,
            otherInterventionstarted: otherInterventionstarted,
          });
        } else {
          console.log(
            `   Missing Other Intervention Started 4... ${element.otherInterventionstarted4}`,
          );
          otherinterventionstartedMissingCounter++;
        }
        if (otherinterventionstartedMissingCounter === 4) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  During Intervention...');
        let duringinterventionMissingCounter = 0;
        let duringintervention =
          await this.duringInterventionRepository.findOne({
            where: {
              description: element.duringintervention1,
            },
          });
        if (duringintervention?.id) {
          await this.selectedDuringInterventionRepository.save({
            codeNumber: element.codeNumber,
            duringintervention: duringintervention,
          });
        } else {
          console.log(
            `   Missing During Intervention 1... ${element.duringintervention1}`,
          );
          duringinterventionMissingCounter++;
        }
        duringintervention = await this.duringInterventionRepository.findOne({
          where: {
            description: element.duringintervention2,
          },
        });
        if (duringintervention?.id) {
          await this.selectedDuringInterventionRepository.save({
            codeNumber: element.codeNumber,
            duringintervention: duringintervention,
          });
        } else {
          console.log(
            `   Missing During Intervention 2... ${element.duringintervention2}`,
          );
          duringinterventionMissingCounter++;
        }
        duringintervention = await this.duringInterventionRepository.findOne({
          where: {
            description: element.duringintervention3,
          },
        });
        if (duringintervention?.id) {
          await this.selectedDuringInterventionRepository.save({
            codeNumber: element.codeNumber,
            duringintervention: duringintervention,
          });
        } else {
          console.log(
            `   Missing During Intervention 3... ${element.duringintervention3}`,
          );
          duringinterventionMissingCounter++;
        }
        duringintervention = await this.duringInterventionRepository.findOne({
          where: {
            description: element.duringintervention4,
          },
        });
        if (duringintervention?.id) {
          await this.selectedDuringInterventionRepository.save({
            codeNumber: element.codeNumber,
            duringintervention: duringintervention,
          });
        } else {
          console.log(
            `   Missing During Intervention 4... ${element.duringintervention4}`,
          );
          duringinterventionMissingCounter++;
        }
        duringintervention = await this.duringInterventionRepository.findOne({
          where: {
            description: element.duringintervention5,
          },
        });
        if (duringintervention?.id) {
          await this.selectedDuringInterventionRepository.save({
            codeNumber: element.codeNumber,
            duringintervention: duringintervention,
          });
        } else {
          console.log(
            `   Missing During Intervention 5... ${element.duringintervention5}`,
          );
          duringinterventionMissingCounter++;
        }
        duringintervention = await this.duringInterventionRepository.findOne({
          where: {
            description: element.duringintervention6,
          },
        });
        if (duringintervention?.id) {
          await this.selectedDuringInterventionRepository.save({
            codeNumber: element.codeNumber,
            duringintervention: duringintervention,
          });
        } else {
          console.log(
            `   Missing During Intervention 6... ${element.duringintervention6}`,
          );
          duringinterventionMissingCounter++;
        }
        duringintervention = await this.duringInterventionRepository.findOne({
          where: {
            description: element.duringintervention7,
          },
        });
        if (duringintervention?.id) {
          await this.selectedDuringInterventionRepository.save({
            codeNumber: element.codeNumber,
            duringintervention: duringintervention,
          });
        } else {
          console.log(
            `   Missing During Intervention 7... ${element.duringintervention7}`,
          );
          duringinterventionMissingCounter++;
        }
        if (duringinterventionMissingCounter === 7) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  During Past...');
        let duringpastMissingCounter = 0;
        let duringpast = await this.duringPastRepository.findOne({
          where: {
            description: element.duringpast1,
          },
        });
        if (duringpast?.id) {
          await this.selectedDuringPastRepository.save({
            codeNumber: element.codeNumber,
            duringpast: duringpast,
          });
        } else {
          console.log(`   Missing During Past 1... ${element.duringpast1}`);
          duringpastMissingCounter++;
        }
        duringpast = await this.duringPastRepository.findOne({
          where: {
            description: element.duringpast2,
          },
        });
        if (duringpast?.id) {
          await this.selectedDuringPastRepository.save({
            codeNumber: element.codeNumber,
            duringpast: duringpast,
          });
        } else {
          console.log(`   Missing During Past 2... ${element.duringpast2}`);
          duringpastMissingCounter++;
        }
        duringpast = await this.duringPastRepository.findOne({
          where: {
            description: element.duringpast3,
          },
        });
        if (duringpast?.id) {
          await this.selectedDuringPastRepository.save({
            codeNumber: element.codeNumber,
            duringpast: duringpast,
          });
        } else {
          console.log(`   Missing During Past 3... ${element.duringpast3}`);
          duringpastMissingCounter++;
        }
        duringpast = await this.duringPastRepository.findOne({
          where: {
            description: element.duringpast4,
          },
        });
        if (duringpast?.id) {
          await this.selectedDuringPastRepository.save({
            codeNumber: element.codeNumber,
            duringpast: duringpast,
          });
        } else {
          console.log(`   Missing During Past 4... ${element.duringpast4}`);
          duringpastMissingCounter++;
        }
        duringpast = await this.duringPastRepository.findOne({
          where: {
            description: element.duringpast5,
          },
        });
        if (duringpast?.id) {
          await this.selectedDuringPastRepository.save({
            codeNumber: element.codeNumber,
            duringpast: duringpast,
          });
        } else {
          console.log(`   Missing During Past 5... ${element.duringpast5}`);
          duringpastMissingCounter++;
        }
        duringpast = await this.duringPastRepository.findOne({
          where: {
            description: element.duringpast6,
          },
        });
        if (duringpast?.id) {
          await this.selectedDuringPastRepository.save({
            codeNumber: element.codeNumber,
            duringpast: duringpast,
          });
        } else {
          console.log(`   Missing During Past 6... ${element.duringpast6}`);
          duringpastMissingCounter++;
        }
        duringpast = await this.duringPastRepository.findOne({
          where: {
            description: element.duringpast7,
          },
        });
        if (duringpast?.id) {
          await this.selectedDuringPastRepository.save({
            codeNumber: element.codeNumber,
            duringpast: duringpast,
          });
        } else {
          console.log(`   Missing During Past 7... ${element.duringpast7}`);
          duringpastMissingCounter++;
        }
        if (duringpastMissingCounter === 7) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Child School...');
        const childschool = await this.childSchoolRepository.findOne({
          where: {
            description: element.childschool,
          },
        });
        if (childschool?.id) {
          await this.selectedChildSchoolRepository.save({
            codeNumber: element.codeNumber,
            childschool: childschool,
          });
        } else {
          console.log(`   Missing Child School... ${element.childschool}`);
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Change Accomodation...');
        const changeaccomodation =
          await this.changeAccomodationRepository.findOne({
            where: {
              description: element.changeaccomodation,
            },
          });
        if (changeaccomodation?.id) {
          await this.selectedChangeAccomodationRepository.save({
            codeNumber: element.codeNumber,
            changeaccomodation: changeaccomodation,
          });
        } else {
          console.log(
            `   Missing Change Accomodation... ${element.changeaccomodation}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Change Employment Vh1...');
        const changeemploymentvh1 =
          await this.changeEmploymentVh1Repository.findOne({
            where: {
              description: element.changeEmploymentVh1,
            },
          });
        if (changeemploymentvh1?.id) {
          await this.selectedChangeEmploymentsVh1Repository.save({
            codeNumber: element.codeNumber,
            changeemploymentvh1: changeemploymentvh1,
          });
        } else {
          console.log(
            `   Missing Change Employment Vh1... ${element.changeEmploymentVh1}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Change Employment Vh2...');
        const changeemploymentvh2 =
          await this.changeEmploymentVh2Repository.findOne({
            where: {
              description: element.changeEmploymentVh2,
            },
          });
        if (changeemploymentvh2?.id) {
          await this.selectedChangeEmploymentsVh2Repository.save({
            codeNumber: element.codeNumber,
            changeemploymentvh2: changeemploymentvh2,
          });
        } else {
          console.log(
            `   Missing Change Employment Vh2... ${element.changeEmploymentVh2}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Intervention Period...');
        const interventionperiod =
          await this.interventionPeriodRepository.findOne({
            where: {
              description: element.interventionperiod,
            },
          });
        if (interventionperiod?.id) {
          await this.selectedInterventionPeriodRepository.save({
            codeNumber: element.codeNumber,
            interventionperiod: interventionperiod,
          });
        } else {
          console.log(
            `   Missing Intervention Period... ${element.interventionperiod}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Time Consumption...');
        const timeconsumption = await this.timeConsumptionRepository.findOne({
          where: {
            description: element.timeconsumption,
          },
        });
        if (timeconsumption?.id) {
          await this.selectedTimeConsumptionRepository.save({
            codeNumber: element.codeNumber,
            timeconsumption: timeconsumption,
          });
        } else {
          console.log(
            `   Missing Time Consumption... ${element.timeconsumption}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Reason For Termination...');
        const reasonfortermination =
          await this.reasonForTerminationRepository.findOne({
            where: {
              description: element.reasonfortermination,
            },
          });
        if (reasonfortermination?.id) {
          await this.selectedReasonForTerminationRepository.save({
            codeNumber: element.codeNumber,
            reasonfortermination: reasonfortermination,
          });
        } else {
          console.log(
            `   Missing Reason For Termination... ${element.reasonfortermination}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Intervention Progress...');
        const interventionprogress =
          await this.interventionProgressRepository.findOne({
            where: {
              description: element.interventionprogress,
            },
          });
        if (interventionprogress?.id) {
          await this.selectedInterventionProgressRepository.save({
            codeNumber: element.codeNumber,
            interventionprogress: interventionprogress,
          });
        } else {
          console.log(
            `   Missing Intervention Progress... ${element.interventionprogress}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Score15 0 Month...');
        if (Number(element.Score15ZeroMonth) > 0 && Number(element.ORS1)) {
          await this.scoreRepository.save({
            codeNumber: element.codeNumber,
            person: Number(element.person),
            occasion: 1,
            date: dayjs(backgroundMetadata.date).format('YYYY-MM-DD'),
            score15: Number(element.Score15ZeroMonth),
            ors: Number(element.ORS1),
          });
        }
        //console.log('  Score15 6 Months...');
        if (Number(element.Score15SixMonth) > 0 && Number(element.ORS2)) {
          await this.scoreRepository.save({
            codeNumber: element.codeNumber,
            person: Number(element.person),
            occasion: 2,
            date: dayjs(backgroundMetadata.date)
              .add(6, 'month')
              .format('YYYY-MM-DD'),
            score15: Number(element.Score15SixMonth),
            ors: Number(element.ORS2),
          });
        }
        //console.log('  Score15 12 Months...');
        if (Number(element.Score15TwelveMonth) > 0 && Number(element.ORS3)) {
          await this.scoreRepository.save({
            codeNumber: element.codeNumber,
            person: Number(element.person),
            occasion: 3,
            date: dayjs(backgroundMetadata.date)
              .add(12, 'month')
              .format('YYYY-MM-DD'),
            score15: Number(element.Score15TwelveMonth),
            ors: Number(element.ORS3),
          });
        }
      } catch (error) {
        console.log(error);
        console.log(element);
        break;
      }
    }
  }
  async seedBofExportedData(): Promise<void> {
    for (let index = 0; index < bofExportedData.length; index++) {
      const element = bofExportedData[index];
      try {
        let isMissingBackgroundData: boolean = false;
        console.log(`  ${element.codeNumber}...`);
        //console.log('  Close Status Exported from DB...');
        let closeStatus = await this.closeStatusRepository.findOne({
          where: {
            codeNumber: element.codeNumber,
          },
        });
        if (closeStatus?.codeNumber) {
          closeStatus = await this.closeStatusRepository.save({
            isChild: element.isChild,
            isGuardianOne: element.isGuardianOne,
            isGuardianTwo: element.isGuardianTwo,
          });
        } else {
          closeStatus = await this.closeStatusRepository.save({
            codeNumber: element.codeNumber,
            processor: element.processor || 'v1admin',
            isClosed: element.isClosed,
            isChild: element.isChild,
            isGuardianOne: element.isGuardianOne,
            isGuardianTwo: element.isGuardianTwo,
          });
        }
        //console.log('  Background Metadata...');
        if (element.yearOfBirth) {
          await this.backgroundMetadataRepository.save({
            codeNumber: element.codeNumber,
            date: element.date,
            yearOfBirth: Number(element.yearOfBirth),
            country: element.country,
          });
        } else {
          await this.backgroundMetadataRepository.save({
            codeNumber: element.codeNumber,
            date: element.date,
            yearOfBirth: null,
            country: element.country,
          });
        }
        //console.log('  Gender...');
        const gender = await this.genderRepository.findOne({
          where: {
            description: element.gender,
          },
        });
        if (gender?.id) {
          await this.selectedGenderRepository.save({
            codeNumber: element.codeNumber,
            gender: gender,
          });
        } else {
          console.log(`   Missing gender... ${element.gender}`);
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Reason For Update...');
        const reasonForUpdate = await this.reasonForUpdateRepository.findOne({
          where: {
            description: element.reasonforupdate,
          },
        });
        if (reasonForUpdate?.id) {
          await this.selectedReasonForUpdateRepository.save({
            codeNumber: element.codeNumber,
            reasonForUpdate: reasonForUpdate,
          });
        } else {
          console.log(
            `   Missing reason for update... ${element.reasonforupdate}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Problem Area...');
        let problemAreaMissingCounter = 0;
        const problemAreaList = element.problemarea?.split(', ');
        for (
          let problemAreaIndex = 0;
          problemAreaIndex < problemAreaList.length;
          problemAreaIndex++
        ) {
          const problemAreaElement = problemAreaList[problemAreaIndex];
          let problemArea = await this.problemAreaRepository.findOne({
            where: {
              description: problemAreaElement,
            },
          });
          if (problemArea?.id) {
            await this.selectedProblemAreaRepository.save({
              codeNumber: element.codeNumber,
              problemArea: problemArea,
            });
          } else {
            console.log(
              `   Missing problema area ${
                problemAreaIndex + 1
              }... ${problemAreaElement}`,
            );
            problemAreaMissingCounter++;
          }
        }
        if (problemAreaMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Previous Intervention...');
        let previousInterventionMissingCounter = 0;
        const previousInterventionList =
          element.previousintervention?.split(', ');
        for (
          let previousInterventionIndex = 0;
          previousInterventionIndex < previousInterventionList.length;
          previousInterventionIndex++
        ) {
          const previousInterventionElement =
            previousInterventionList[previousInterventionIndex];
          let previousIntervention =
            await this.previousInterventionRepository.findOne({
              where: {
                description: previousInterventionElement,
              },
            });
          if (previousIntervention?.id) {
            await this.selectedPreviousInterventionRepository.save({
              codeNumber: element.codeNumber,
              previousIntervention: previousIntervention,
            });
          } else {
            console.log(
              `   Missing Previous Intervention ${
                previousInterventionIndex + 1
              }... ${previousInterventionElement}`,
            );
            previousInterventionMissingCounter++;
          }
        }
        if (previousInterventionMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Other Intervention...');
        let otherInterventionMissingCounter = 0;
        const otherInterventionList = element.otherinterventions?.split(', ');
        for (
          let otherInterventionIndex = 0;
          otherInterventionIndex < otherInterventionList.length;
          otherInterventionIndex++
        ) {
          const otherInterventionElement =
            otherInterventionList[otherInterventionIndex];
          let otherIntervention =
            await this.otherInterventionsRepository.findOne({
              where: {
                description: otherInterventionElement,
              },
            });
          if (otherIntervention?.id) {
            await this.selectedOtherInterventionsRepository.save({
              codeNumber: element.codeNumber,
              otherInterventions: otherIntervention,
            });
          } else {
            console.log(
              `   Missing Other Intervention ${
                otherInterventionIndex + 1
              }... ${otherInterventionElement}`,
            );
            otherInterventionMissingCounter++;
          }
        }
        if (otherInterventionMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Family Constellation...');
        let familyConstellationMissingCounter = 0;
        const familyConstellationList =
          element.familyconstellation?.split(', ');
        for (
          let familyConstellationIndex = 0;
          familyConstellationIndex < familyConstellationList.length;
          familyConstellationIndex++
        ) {
          const familyConstellationElement =
            familyConstellationList[familyConstellationIndex];
          let familyConstellation =
            await this.familyConstellationRepository.findOne({
              where: {
                description: familyConstellationElement,
              },
            });
          if (familyConstellation?.id) {
            await this.selectedFamilyConstellationRepository.save({
              codeNumber: element.codeNumber,
              familyConstellation: familyConstellation,
            });
          } else {
            console.log(
              `   Missing Family Constellation ${
                familyConstellationIndex + 1
              }... ${familyConstellationElement}`,
            );
            familyConstellationMissingCounter++;
          }
        }
        if (familyConstellationMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Who Participates...');
        let whoParticipatesMissingCounter = 0;
        const whoParticipatesList = element.whoparticipates?.split(', ');
        for (
          let whoParticipatesIndex = 0;
          whoParticipatesIndex < otherInterventionList.length;
          whoParticipatesIndex++
        ) {
          const whoParticipatesElement =
            whoParticipatesList[whoParticipatesIndex];
          let whoParticipates = await this.whoParticipatesRepository.findOne({
            where: {
              description: whoParticipatesElement,
            },
          });
          if (whoParticipates?.id) {
            await this.selectedWhoParticipatesRepository.save({
              codeNumber: element.codeNumber,
              whoParticipates: whoParticipates,
            });
          } else {
            console.log(
              `   Missing Who Participates ${
                whoParticipatesIndex + 1
              }... ${whoParticipatesElement}`,
            );
            whoParticipatesMissingCounter++;
          }
        }
        if (whoParticipatesMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Education VH 1...');
        let educationVh1MissingCounter = 0;
        const educationVh1List = element.educationvh1?.split(', ');
        for (
          let educationVh1Index = 0;
          educationVh1Index < educationVh1List.length;
          educationVh1Index++
        ) {
          const educationVh1Element = educationVh1List[educationVh1Index];
          let educationVh1 = await this.educationVh1Repository.findOne({
            where: {
              description: educationVh1Element,
            },
          });
          if (educationVh1?.id) {
            await this.selectedEducationVh1Repository.save({
              codeNumber: element.codeNumber,
              educationVh1: educationVh1,
            });
          } else {
            console.log(
              `   Missing Education Vh1 ${
                educationVh1Index + 1
              }... ${educationVh1Element}`,
            );
            educationVh1MissingCounter++;
          }
        }
        if (educationVh1MissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Education VH 2...');
        let educationVh2MissingCounter = 0;
        const educationVh2List = element.educationvh2?.split(', ');
        for (
          let educationVh2Index = 0;
          educationVh2Index < educationVh2List.length;
          educationVh2Index++
        ) {
          const educationVh2Element = educationVh2List[educationVh2Index];
          let educationVh2 = await this.educationVh2Repository.findOne({
            where: {
              description: educationVh2Element,
            },
          });
          if (educationVh2?.id) {
            await this.selectedEducationVh2Repository.save({
              codeNumber: element.codeNumber,
              educationVh2: educationVh2,
            });
          } else {
            console.log(
              `   Missing Education Vh2 ${
                educationVh2Index + 1
              }... ${educationVh2Element}`,
            );
            educationVh2MissingCounter++;
          }
        }
        if (educationVh2MissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Employment VH 1...');
        let employmentVh1MissingCounter = 0;
        const employmentVh1List = element.employmentvh1?.split(', ');
        for (
          let employmentVh1Index = 0;
          employmentVh1Index < educationVh1List.length;
          employmentVh1Index++
        ) {
          const employmentVh1Element = employmentVh1List[employmentVh1Index];
          let employmentVh1 = await this.employmentVh1Repository.findOne({
            where: {
              description: employmentVh1Element,
            },
          });
          if (employmentVh1?.id) {
            await this.selectedEmploymentVh1Repository.save({
              codeNumber: element.codeNumber,
              employmentVh1: employmentVh1,
            });
          } else {
            console.log(
              `   Missing Employment Vh1 ${
                employmentVh1Index + 1
              }... ${employmentVh1Element}`,
            );
            employmentVh1MissingCounter++;
          }
        }
        if (employmentVh1MissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Employment VH 2...');
        let employmentVh2MissingCounter = 0;
        const employmentVh2List = element.employmentvh2?.split(', ');
        for (
          let employmentVh2Index = 0;
          employmentVh2Index < educationVh2List.length;
          employmentVh2Index++
        ) {
          const employmentVh2Element = employmentVh2List[employmentVh2Index];
          let employmentVh2 = await this.employmentVh2Repository.findOne({
            where: {
              description: employmentVh2Element,
            },
          });
          if (employmentVh2?.id) {
            await this.selectedEmploymentVh2Repository.save({
              codeNumber: element.codeNumber,
              employmentVh2: employmentVh2,
            });
          } else {
            console.log(
              `   Missing Employment Vh2 ${
                employmentVh2Index + 1
              }... ${employmentVh2Element}`,
            );
            employmentVh2MissingCounter++;
          }
        }
        if (employmentVh2MissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Interpreter Required...');
        const interpreterRequired =
          await this.interpreterRequiredRepository.findOne({
            where: {
              description: element.interpreterrequired,
            },
          });
        if (interpreterRequired?.id) {
          await this.selectedInterpreterRequiredRepository.save({
            codeNumber: element.codeNumber,
            interpreterRequired: interpreterRequired,
          });
        } else {
          console.log(
            `   Missing Interpreter Required... ${element.interpreterrequired}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Type Of Effort...');
        let typeOfEffortMissingCounter = 0;
        const typeOfEffortList = element.typeofeffort?.split(', ');
        for (
          let typeOfEffortIndex = 0;
          typeOfEffortIndex < typeOfEffortList.length;
          typeOfEffortIndex++
        ) {
          const typeOfEffortElement = typeOfEffortList[typeOfEffortIndex];
          let typeOfEffort = await this.typeOfEffortRepository.findOne({
            where: {
              description: typeOfEffortElement,
            },
          });
          if (typeOfEffort?.id) {
            await this.selectedTypeOfEffortRepository.save({
              codeNumber: element.codeNumber,
              typeOfEffort: typeOfEffort,
            });
          } else {
            console.log(
              `   Missing Type Of Effort ${
                typeOfEffortIndex + 1
              }... ${typeOfEffortElement}`,
            );
            typeOfEffortMissingCounter++;
          }
        }
        if (typeOfEffortMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Established Diagnoses...');
        let establishedDiagnosesMissingCounter = 0;
        const establishedDiagnosesList =
          element.establisheddiagnoses?.split(', ');
        for (
          let establishedDiagnosesIndex = 0;
          establishedDiagnosesIndex < establishedDiagnosesList.length;
          establishedDiagnosesIndex++
        ) {
          const establishedDiagnosesElement =
            establishedDiagnosesList[establishedDiagnosesIndex];
          let establishedDiagnoses =
            await this.establishedDiagnosesRepository.findOne({
              where: {
                description: establishedDiagnosesElement,
              },
            });
          if (establishedDiagnoses?.id) {
            await this.selectedEstablishedDiagnosesRepository.save({
              codeNumber: element.codeNumber,
              establishedDiagnoses: establishedDiagnoses,
            });
          } else {
            console.log(
              `   Missing Established Diagnoses ${
                establishedDiagnosesIndex + 1
              }... ${establishedDiagnosesElement}`,
            );
            establishedDiagnosesMissingCounter++;
          }
        }
        if (establishedDiagnosesMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  School Uniform...');
        let schoolUniformMissingCounter = 0;
        const schoolUniformList = element.schooluniform?.split(', ');
        for (
          let schoolUniformIndex = 0;
          schoolUniformIndex < schoolUniformList.length;
          schoolUniformIndex++
        ) {
          const schoolUniformElement = schoolUniformList[schoolUniformIndex];
          let schoolUniform = await this.schoolUniformRepository.findOne({
            where: {
              description: schoolUniformElement,
            },
          });
          if (schoolUniform?.id) {
            await this.selectedSchoolUniformRepository.save({
              codeNumber: element.codeNumber,
              schoolUniform: schoolUniform,
            });
          } else {
            console.log(
              `   Missing School Uniform ${
                schoolUniformIndex + 1
              }... ${schoolUniformElement}`,
            );
            schoolUniformMissingCounter++;
          }
        }
        if (schoolUniformMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Other Intervention Started...');
        let otherInterventionStartedMissingCounter = 0;
        const otherInterventionStartedList =
          element.otherinterventionsstarted?.split(', ');
        for (
          let otherInterventionStartedIndex = 0;
          otherInterventionStartedIndex < otherInterventionStartedList.length;
          otherInterventionStartedIndex++
        ) {
          const otherInterventionStartedElement =
            otherInterventionStartedList[otherInterventionStartedIndex];
          let otherInterventionStarted =
            await this.otherInterventionsStartedRepository.findOne({
              where: {
                description: otherInterventionStartedElement,
              },
            });
          if (otherInterventionStarted?.id) {
            await this.selectedOtherInterventionsStartedRepository.save({
              codeNumber: element.codeNumber,
              otherInterventionStarted: otherInterventionStarted,
            });
          } else {
            console.log(
              `   Missing Other Intervention Started ${
                otherInterventionStartedIndex + 1
              }... ${otherInterventionStartedElement}`,
            );
            otherInterventionStartedMissingCounter++;
          }
        }
        if (otherInterventionStartedMissingCounter === 4) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  During Intervention...');
        let duringInterventionMissingCounter = 0;
        const duringInterventionList = element.duringintervention?.split(', ');
        for (
          let duringInterventionIndex = 0;
          duringInterventionIndex < duringInterventionList.length;
          duringInterventionIndex++
        ) {
          const duringInterventionElement =
            duringInterventionList[duringInterventionIndex];
          let duringIntervention =
            await this.duringInterventionRepository.findOne({
              where: {
                description: duringInterventionElement,
              },
            });
          if (duringIntervention?.id) {
            await this.selectedDuringInterventionRepository.save({
              codeNumber: element.codeNumber,
              duringIntervention: duringIntervention,
            });
          } else {
            console.log(
              `   Missing During Intervention ${
                duringInterventionIndex + 1
              }... ${duringInterventionElement}`,
            );
            duringInterventionMissingCounter++;
          }
        }
        if (duringInterventionMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  During Past...');
        let duringPastMissingCounter = 0;
        const duringPastList = element.duringpast?.split(', ');
        for (
          let duringPastIndex = 0;
          duringPastIndex < duringPastList.length;
          duringPastIndex++
        ) {
          const duringPastElement = duringPastList[duringPastIndex];
          let duringPast = await this.duringInterventionRepository.findOne({
            where: {
              description: duringPastElement,
            },
          });
          if (duringPast?.id) {
            await this.selectedDuringPastRepository.save({
              codeNumber: element.codeNumber,
              duringPast: duringPast,
            });
          } else {
            console.log(
              `   Missing During Past ${
                duringPastIndex + 1
              }... ${duringPastElement}`,
            );
            duringPastMissingCounter++;
          }
        }
        if (duringPastMissingCounter === 0) {
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Child School...');
        const childschool = await this.childSchoolRepository.findOne({
          where: {
            description: element.childschool,
          },
        });
        if (childschool?.id) {
          await this.selectedChildSchoolRepository.save({
            codeNumber: element.codeNumber,
            childschool: childschool,
          });
        } else {
          console.log(`   Missing Child School... ${element.childschool}`);
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Change Accomodation...');
        const changeaccomodation =
          await this.changeAccomodationRepository.findOne({
            where: {
              description: element.changeaccomodation,
            },
          });
        if (changeaccomodation?.id) {
          await this.selectedChangeAccomodationRepository.save({
            codeNumber: element.codeNumber,
            changeaccomodation: changeaccomodation,
          });
        } else {
          console.log(
            `   Missing Change Accomodation... ${element.changeaccomodation}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Change Employment Vh1...');
        const changeemploymentvh1 =
          await this.changeEmploymentVh1Repository.findOne({
            where: {
              description: element.changeemploymentvh1,
            },
          });
        if (changeemploymentvh1?.id) {
          await this.selectedChangeEmploymentsVh1Repository.save({
            codeNumber: element.codeNumber,
            changeemploymentvh1: changeemploymentvh1,
          });
        } else {
          console.log(
            `   Missing Change Employment Vh1... ${element.changeemploymentvh1}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Change Employment Vh2...');
        const changeemploymentvh2 =
          await this.changeEmploymentVh2Repository.findOne({
            where: {
              description: element.changeemploymentvh2,
            },
          });
        if (changeemploymentvh2?.id) {
          await this.selectedChangeEmploymentsVh2Repository.save({
            codeNumber: element.codeNumber,
            changeemploymentvh2: changeemploymentvh2,
          });
        } else {
          console.log(
            `   Missing Change Employment Vh2... ${element.changeemploymentvh2}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Intervention Period...');
        const interventionperiod =
          await this.interventionPeriodRepository.findOne({
            where: {
              description: element.interventionperiod,
            },
          });
        if (interventionperiod?.id) {
          await this.selectedInterventionPeriodRepository.save({
            codeNumber: element.codeNumber,
            interventionperiod: interventionperiod,
          });
        } else {
          console.log(
            `   Missing Intervention Period... ${element.interventionperiod}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Time Consumption...');
        const timeconsumption = await this.timeConsumptionRepository.findOne({
          where: {
            description: element.timeconsumption,
          },
        });
        if (timeconsumption?.id) {
          await this.selectedTimeConsumptionRepository.save({
            codeNumber: element.codeNumber,
            timeconsumption: timeconsumption,
          });
        } else {
          console.log(
            `   Missing Time Consumption... ${element.timeconsumption}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Reason For Termination...');
        const reasonfortermination =
          await this.reasonForTerminationRepository.findOne({
            where: {
              description: element.reasonfortermination,
            },
          });
        if (reasonfortermination?.id) {
          await this.selectedReasonForTerminationRepository.save({
            codeNumber: element.codeNumber,
            reasonfortermination: reasonfortermination,
          });
        } else {
          console.log(
            `   Missing Reason For Termination... ${element.reasonfortermination}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Intervention Progress...');
        const interventionprogress =
          await this.interventionProgressRepository.findOne({
            where: {
              description: element.interventionprogress,
            },
          });
        if (interventionprogress?.id) {
          await this.selectedInterventionProgressRepository.save({
            codeNumber: element.codeNumber,
            interventionprogress: interventionprogress,
          });
        } else {
          console.log(
            `   Missing Intervention Progress... ${element.interventionprogress}`,
          );
          isMissingBackgroundData = true;
          this.closeStatusRepository.save({
            status: SurveyStatus.Incomplete,
            id: closeStatus.id,
          });
        }
        //console.log('  Score15 0, 6 and 12 Month...');
        if (Number(element.score15) > 0 && Number(element.ors)) {
          await this.scoreRepository.save({
            codeNumber: element.codeNumber,
            person: Number(element.person),
            occasion: Number(element.occasion),
            date: dayjs(element.scoreDate).format('YYYY-MM-DD'),
            score15: Number(element.score15),
            score15Answers: element?.score15Answers?.split(','),
            ors: Number(element.ors),
            orsAndSatisfactionScaleAnswers:
              element?.orsAndSatisfactionScaleAnswers?.split(','),
          });
        }
      } catch (error) {
        console.log(error);
        console.log(element);
        break;
      }
    }
  }
  // follow up data
  async seedFollowUpData(): Promise<void> {
    console.log(' Intervention Period...');
    await this.interventionPeriodRepository.delete({});
    await this.interventionPeriodRepository.save(interventionPeriodSeedData);

    console.log(' Intervention Progress...');
    await this.interventionProgressRepository.delete({});
    await this.interventionProgressRepository.save(
      interventionProgressSeedData,
    );

    console.log(' Reason For Termination...');
    await this.reasonForTerminationRepository.delete({});
    await this.reasonForTerminationRepository.save(
      reasonForTerminationSeedData,
    );

    console.log(' Reason For Update...');
    await this.reasonForUpdateRepository.delete({});
    await this.reasonForUpdateRepository.save(reasonForUpdateSeedData);

    console.log(' Time Consumption...');
    await this.timeConsumptionRepository.delete({});
    await this.timeConsumptionRepository.save(timeConsumptionSeedData);
  }
  // Important Events Bof
  async seedImportantEventBof(): Promise<void> {
    console.log(' During Intervention...');
    await this.duringInterventionRepository.delete({});
    await this.duringInterventionRepository.save(duringInterventionSeedData);

    console.log(' During Past...');
    await this.duringPastRepository.delete({});
    await this.duringPastRepository.save(duringPastSeedData);

    console.log(' Child School Repository...');
    await this.childSchoolRepository.delete({});
    await this.childSchoolRepository.save(childSchoolSeedData);

    console.log(' Change Accomodation...');
    await this.changeAccomodationRepository.delete({});
    const tmp = await this.changeAccomodationRepository.save(
      changeAccomodationSeedData,
    );

    console.log(' Change Employment Vh1...');
    await this.changeEmploymentVh1Repository.delete({});
    await this.changeEmploymentVh1Repository.save(changeEmploymentVh1SeedData);

    console.log(' Change Employment Vh2...');
    await this.changeEmploymentVh2Repository.delete({});
    await this.changeEmploymentVh2Repository.save(changeEmploymentVh2SeedData);
  }
  //Background Data Bof
  async seedBackgroundDataBof(): Promise<void> {
    await this.clearBofData();
    console.log(' Gender...');
    await this.genderRepository.delete({});
    await this.genderRepository.save(genderSeedData);
    console.log(' Problem Area...');
    await this.problemAreaRepository.delete({});
    await this.problemAreaRepository.save(problemAreaSeedData);
    console.log(' Previous Intervention...');
    await this.previousInterventionRepository.delete({});
    await this.previousInterventionRepository.save(
      previousInterventionSeedData,
    );
    console.log(' Other Interventions...');
    await this.otherInterventionsRepository.delete({});
    await this.otherInterventionsRepository.save(otherInterventionsSeedData);
    console.log(' Family Constellation...');
    await this.familyConstellationRepository.delete({});
    await this.familyConstellationRepository.save(familyConstellationSeedData);
    console.log(' Who Participates...');
    await this.whoParticipatesRepository.delete({});
    await this.whoParticipatesRepository.save(whoParticipatesSeedData);
    console.log(' Education Vh1...');
    await this.educationVh1Repository.delete({});
    await this.educationVh1Repository.save(educationVh1SeedData);
    console.log(' Education Vh2...');
    await this.educationVh2Repository.delete({});
    await this.educationVh2Repository.save(educationVh2SeedData);
    console.log(' Employment Vh1...');
    await this.employmentVh1Repository.delete({});
    await this.employmentVh1Repository.save(employmentVh1SeedData);
    console.log(' Employment Vh2...');
    await this.employmentVh2Repository.delete({});
    await this.employmentVh2Repository.save(employmentVh2SeedData);
    console.log(' Interpreter Required...');
    await this.interpreterRequiredRepository.delete({});
    await this.interpreterRequiredRepository.save(interpreterRequiredSeedData);
    console.log(' Type Of Effort...');
    await this.typeOfEffortRepository.delete({});
    await this.typeOfEffortRepository.save(typeOfEffortSeedData);
    console.log(' Established Diagnoses...');
    await this.establishedDiagnosesRepository.delete({});
    await this.establishedDiagnosesRepository.save(
      establishedDiagnosesSeedData,
    );
    console.log(' School Uniform...');
    await this.schoolUniformRepository.delete({});
    await this.schoolUniformRepository.save(schoolUniformSeedData);
    console.log(' Other Interventions Started...');
    await this.otherInterventionsStartedRepository.delete({});
    await this.otherInterventionsStartedRepository.save(
      otherInterventionsStartedSeedData,
    );
  }
}
