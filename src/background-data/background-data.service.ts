import { Injectable } from '@nestjs/common';
import { SurveyStatus } from 'src/core/enums/survey-status';
import { OccasionIndex } from 'src/core/models/occasion.modal';
import { FollowUpDataService } from 'src/follow-up-survey/follow-up-data.service';
import { ScoreService } from 'src/score/score.service';
import {
  BackgroundDataDto,
  BackgroundMetadataDto,
  BackgroundSurveyBasicDataDto,
} from './background-data.dto';
import { BackgroundMetadataService } from './background-metadata.service';
import { EducationVh1Service } from './education-vh1/education-vh1.service';
import { SelectedEducationVh1Service } from './education-vh1/selected-education-vh1.service';
import { EducationVh2Service } from './education-vh2/education-vh2.service';
import { SelectedEducationVh2Service } from './education-vh2/selected-education-vh2.service';
import { EmploymentVh1Service } from './employment-vh1/employment-vh1.service';
import { SelectedEmploymentVh1Service } from './employment-vh1/selected-employment-vh1.service';
import { EmploymentVh2Service } from './employment-vh2/employment-vh2.service';
import { SelectedEmploymentVh2Service } from './employment-vh2/selected-employment-vh2.service';
import { EstablishedDiagnosesService } from './established-diagnoses/established-diagnoses.service';
import { SelectedEstablishedDiagnosesService } from './established-diagnoses/selected-established-diagnoses.service';
import { FamilyConstellationService } from './family-constellation/family-constellation.service';
import { SelectedFamilyConstellationService } from './family-constellation/selected-family-constellation.service';
import { GenderService } from './gender/gender.service';
import { SelectedGenderService } from './gender/selected-gender.service';
import { InterpreterRequiredService } from './interpreter-required/interpreter-required.service';
import { SelectedInterpreterRequiredService } from './interpreter-required/selected-interpreter-required.service';
import { OtherInterventionsService } from './other-interventions/other-interventions.service';
import { SelectedOtherInterventionsService } from './other-interventions/selected-other-interventions.service';
import { PreviousInterventionService } from './previous-intervention/previous-intervention.service';
import { SelectedPreviousInterventionService } from './previous-intervention/selected-previous-intervention.service';
import { ProblemAreaService } from './problem-area/problem-area.service';
import { SelectedProblemAreaService } from './problem-area/selected-problem-area.service';
import { ReasonForUpdateService } from './reason-for-update/reason-for-update.service';
import { SelectedReasonForUpdateService } from './reason-for-update/selected-reason-for-update.service';
import { SchoolUniformService } from './school-uniform/school-uniform.service';
import { SelectedSchoolUniformService } from './school-uniform/selected-school-uniform.service';
import { SelectedTypeOfEffortService } from './type-of-effort/selected-type-of-effort.service';
import { TypeOfEffortService } from './type-of-effort/type-of-effort.service';
import { SelectedWhoParticipatesService } from './who-participates/selected-who-participates.service';
import { WhoParticipatesService } from './who-participates/who-participates.service';
import ImageModule from 'docxtemplater-image-module-free';
import { generate } from 'rand-token';
import * as qrcode from 'qrcode';

import dayjs = require('dayjs');
import AdmZip = require('adm-zip');
import qr = require('qrcode');
import fs = require('fs');
import path = require('path');
import PizZip = require('pizzip');
import { join } from 'path';
import { base64Parser } from 'src/core/functions/base64-parser.function';
import { CloseStatusService } from 'src/close-status/child/close.status.child.service';
import {
  codeGeneratorChars,
  codeGeneratorSize,
} from 'src/core/constants/generator.const';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Docxtemplater = require('docxtemplater');

/* const template1Path = `${__dirname}/template1.docx`;
const template2Path = `${__dirname}/template2.docx`;
const templateAPath = `${__dirname}/templateA.docx`;
const templateBPath = `${__dirname}/templateB.docx`;
const middlePath = `${__dirname}/middle.docx`; */
const destPath = `${__dirname}/survey.docx`;

@Injectable()
export class BackgroundDataService {
  constructor(
    public backgroundMetadataService: BackgroundMetadataService,
    public closeStatusService: CloseStatusService,
    public scoreService: ScoreService,
    public followUpService: FollowUpDataService,

    public genderService: GenderService,
    public educationVh1Service: EducationVh1Service,
    public educationVh2Service: EducationVh2Service,
    public employmentVh1Service: EmploymentVh1Service,
    public employmentVh2Service: EmploymentVh2Service,
    public establishedDiagnosesService: EstablishedDiagnosesService,
    public familyConstellationService: FamilyConstellationService,
    public interpreterRequiredService: InterpreterRequiredService,
    public otherInterventionsService: OtherInterventionsService,
    public previousInterventionService: PreviousInterventionService,
    public problemAreaService: ProblemAreaService,
    public reasonForUpdateService: ReasonForUpdateService,
    public schoolUniformService: SchoolUniformService,
    public typeOfEffortService: TypeOfEffortService,
    public whoParticipatesService: WhoParticipatesService,

    public selectedGenderService: SelectedGenderService,
    public selectedEducationVh1Service: SelectedEducationVh1Service,
    public selectedEducationVh2Service: SelectedEducationVh2Service,
    public selectedEmploymentVh1Service: SelectedEmploymentVh1Service,
    public selectedEmploymentVh2Service: SelectedEmploymentVh2Service,
    public selectedEstablishedDiagnosesService: SelectedEstablishedDiagnosesService,
    public selectedFamilyConstellationService: SelectedFamilyConstellationService,
    public selectedInterpreterRequiredService: SelectedInterpreterRequiredService,
    public selectedOtherInterventionsService: SelectedOtherInterventionsService,
    public selectedPreviousInterventionService: SelectedPreviousInterventionService,
    public selectedProblemAreaService: SelectedProblemAreaService,
    public selectedReasonForUpdateService: SelectedReasonForUpdateService,
    public selectedSchoolUniformService: SelectedSchoolUniformService,
    public selectedTypeOfEffortService: SelectedTypeOfEffortService,
    public selectedWhoParticipatesService: SelectedWhoParticipatesService,
  ) {}

  async basicData(): Promise<BackgroundSurveyBasicDataDto> {
    const genderEntities = await this.genderService.find();
    const educationVh1Entities = await this.educationVh1Service.find();
    const educationVh2Entities = await this.educationVh2Service.find();
    const employmentVh1Entities = await this.employmentVh1Service.find();
    const employmentVh2Entities = await this.employmentVh2Service.find();
    const establishedDiagnosesEntities =
      await this.establishedDiagnosesService.find();
    const familyConstellationEntities =
      await this.familyConstellationService.find();
    const interpreterRequiredEntities =
      await this.interpreterRequiredService.find();
    const otherInterventionsEntities =
      await this.otherInterventionsService.find();
    const previousInterventionEntities =
      await this.previousInterventionService.find();
    const problemAreaEntities = await this.problemAreaService.find();
    const reasonForUpdateEntities = await this.reasonForUpdateService.find();
    const schoolUniformEntities = await this.schoolUniformService.find();
    const typeOfEffortEntities = await this.typeOfEffortService.find();
    const whoParticipatesEntities = await this.whoParticipatesService.find();

    return {
      genderEntities,
      educationVh1Entities,
      educationVh2Entities,
      employmentVh1Entities,
      employmentVh2Entities,
      establishedDiagnosesEntities,
      familyConstellationEntities,
      interpreterRequiredEntities,
      otherInterventionsEntities,
      previousInterventionEntities,
      problemAreaEntities,
      reasonForUpdateEntities,
      schoolUniformEntities,
      typeOfEffortEntities,
      whoParticipatesEntities,
      participantsEntities: [
        { id: 0, description: 'NewClientModal.Child' },
        { id: 1, description: 'NewClientModal.GuardianOne' },
        { id: 2, description: 'NewClientModal.GuardianTwo' },
      ],
    };
  }

  async metadata(): Promise<BackgroundMetadataDto[]> {
    return await this.backgroundMetadataService.find();
  }

  async create(payload: BackgroundDataDto): Promise<boolean> {
    try {
      const codeNumber = payload?.codeNumber;

      await this.backgroundMetadataService.create({
        codeNumber,
        date: payload?.date,
        yearOfBirth: payload?.yearOfBirth,
        country: payload?.country,
      });

      await this.selectedGenderService.deleteByCodeNumber(codeNumber);
      await this.selectedEducationVh1Service.deleteByCodeNumber(codeNumber);
      await this.selectedEducationVh2Service.deleteByCodeNumber(codeNumber);
      await this.selectedEmploymentVh1Service.deleteByCodeNumber(codeNumber);
      await this.selectedEmploymentVh2Service.deleteByCodeNumber(codeNumber);
      await this.selectedEstablishedDiagnosesService.deleteByCodeNumber(
        codeNumber,
      );
      await this.selectedFamilyConstellationService.deleteByCodeNumber(
        codeNumber,
      );
      await this.selectedInterpreterRequiredService.deleteByCodeNumber(
        codeNumber,
      );
      await this.selectedOtherInterventionsService.deleteByCodeNumber(
        codeNumber,
      );
      await this.selectedPreviousInterventionService.deleteByCodeNumber(
        codeNumber,
      );
      await this.selectedProblemAreaService.deleteByCodeNumber(codeNumber);
      await this.selectedReasonForUpdateService.deleteByCodeNumber(codeNumber);
      await this.selectedSchoolUniformService.deleteByCodeNumber(codeNumber);
      await this.selectedTypeOfEffortService.deleteByCodeNumber(codeNumber);
      await this.selectedWhoParticipatesService.deleteByCodeNumber(codeNumber);
      if (payload?.formDataByEntityName?.gender) {
        for (const id of payload?.formDataByEntityName['gender']) {
          await this.selectedGenderService.create({
            codeNumber,
            gender: await this.genderService.findOne({ where: { id: +id } }),
          });
        }
      }
      if (payload?.formDataByEntityName?.educationVh1) {
        for (const id of payload?.formDataByEntityName['educationVh1']) {
          await this.selectedEducationVh1Service.create({
            codeNumber,
            educationVh1: await this.educationVh1Service.findOne({
              where: { id: +id },
            }),
          });
        }
      }
      if (payload?.formDataByEntityName?.educationVh2) {
        for (const id of payload?.formDataByEntityName['educationVh2']) {
          await this.selectedEducationVh2Service.create({
            codeNumber,
            educationVh2: await this.educationVh2Service.findOne({
              where: { id: +id },
            }),
          });
        }
      }
      if (payload?.formDataByEntityName?.employmentVh1) {
        for (const id of payload?.formDataByEntityName['employmentVh1']) {
          await this.selectedEmploymentVh1Service.create({
            codeNumber,
            employmentVh1: await this.employmentVh1Service.findOne({
              where: { id: +id },
            }),
          });
        }
      }
      if (payload?.formDataByEntityName?.employmentVh2) {
        for (const id of payload?.formDataByEntityName['employmentVh2']) {
          await this.selectedEmploymentVh2Service.create({
            codeNumber,
            employmentVh2: await this.employmentVh2Service.findOne({
              where: { id: +id },
            }),
          });
        }
      }
      if (payload?.formDataByEntityName?.establishedDiagnoses) {
        for (const id of payload?.formDataByEntityName[
          'establishedDiagnoses'
        ]) {
          await this.selectedEstablishedDiagnosesService.create(
            typeof id === 'number'
              ? {
                  codeNumber,
                  establishedDiagnoses:
                    await this.establishedDiagnosesService.findOne({
                      where: { id: +id },
                    }),
                }
              : {
                  codeNumber,
                  other: id as string,
                },
          );
        }
      }
      if (payload?.formDataByEntityName?.familyConstellation) {
        for (const id of payload?.formDataByEntityName['familyConstellation']) {
          await this.selectedFamilyConstellationService.create(
            typeof id === 'number'
              ? {
                  codeNumber,
                  familyConstellation:
                    await this.familyConstellationService.findOne({
                      where: { id: +id },
                    }),
                }
              : {
                  codeNumber,
                  other: id as string,
                },
          );
        }
      }
      if (payload?.formDataByEntityName?.interpreterRequired) {
        for (const id of payload?.formDataByEntityName['interpreterRequired']) {
          await this.selectedInterpreterRequiredService.create({
            codeNumber,
            interpreterRequired: await this.interpreterRequiredService.findOne({
              where: { id: +id },
            }),
          });
        }
      }
      if (payload?.formDataByEntityName?.otherInterventions) {
        for (const id of payload?.formDataByEntityName['otherInterventions']) {
          await this.selectedOtherInterventionsService.create(
            typeof id === 'number'
              ? {
                  codeNumber,
                  otherInterventions:
                    await this.otherInterventionsService.findOne({
                      where: { id: +id },
                    }),
                }
              : {
                  codeNumber,
                  other: id as string,
                },
          );
        }
      }
      if (payload?.formDataByEntityName?.previousIntervention) {
        for (const id of payload?.formDataByEntityName[
          'previousIntervention'
        ]) {
          await this.selectedPreviousInterventionService.create(
            typeof id === 'number'
              ? {
                  codeNumber,
                  previousIntervention:
                    await this.previousInterventionService.findOne({
                      where: { id: +id },
                    }),
                }
              : {
                  codeNumber,
                  other: id as string,
                },
          );
        }
      }
      if (payload?.formDataByEntityName?.problemArea) {
        for (const id of payload?.formDataByEntityName['problemArea']) {
          await await this.selectedProblemAreaService.create(
            typeof id === 'number'
              ? {
                  codeNumber,
                  problemArea: await this.problemAreaService.findOne({
                    where: { id: +id },
                  }),
                }
              : {
                  codeNumber,
                  other: id as string,
                },
          );
        }
      }
      if (payload?.formDataByEntityName?.reasonForUpdate) {
        for (const id of payload?.formDataByEntityName['reasonForUpdate']) {
          await this.selectedReasonForUpdateService.create({
            codeNumber,
            reasonForUpdate: await this.reasonForUpdateService.findOne({
              where: { id: +id },
            }),
          });
        }
      }
      if (payload?.formDataByEntityName?.schoolUniform) {
        for (const id of payload?.formDataByEntityName['schoolUniform']) {
          await this.selectedSchoolUniformService.create({
            codeNumber,
            schoolUniform: await this.schoolUniformService.findOne({
              where: { id: +id },
            }),
          });
        }
      }
      if (payload?.formDataByEntityName?.typeOfEffort) {
        for (const id of payload?.formDataByEntityName['typeOfEffort']) {
          await this.selectedTypeOfEffortService.create({
            codeNumber,
            typeOfEffort: await this.typeOfEffortService.findOne({
              where: { id: +id },
            }),
          });
        }
      }
      if (payload?.formDataByEntityName?.whoParticipates) {
        for (const id of payload?.formDataByEntityName['whoParticipates']) {
          await this.selectedWhoParticipatesService.create(
            typeof id === 'number'
              ? {
                  codeNumber,
                  whoParticipates: await this.whoParticipatesService.findOne({
                    where: { id: +id },
                  }),
                }
              : {
                  codeNumber,
                  other: id as string,
                },
          );
        }
      }
      return true;
    } catch (e) {
      console.log('background data create error: ', e);
      return false;
    }
  }

  async get(codeNumber: string): Promise<BackgroundDataDto> {
    const metadata = await this.backgroundMetadataService.findOne({
      where: { codeNumber: codeNumber },
    });
    const selectedGenderEntities = await this.selectedGenderService.find({
      where: { codeNumber },
      relations: ['gender'],
    });
    const selectedEducationVh1Entities =
      await this.selectedEducationVh1Service.find({
        where: { codeNumber },
        relations: ['educationVh1'],
      });
    const selectedEducationVh2Entities =
      await this.selectedEducationVh2Service.find({
        where: { codeNumber },
        relations: ['educationVh2'],
      });
    const selectedEmploymentVh1Entities =
      await this.selectedEmploymentVh1Service.find({
        where: { codeNumber },
        relations: ['employmentVh1'],
      });
    const selectedEmploymentVh2Entities =
      await this.selectedEmploymentVh2Service.find({
        where: { codeNumber },
        relations: ['employmentVh2'],
      });
    const selectedEstablishedDiagnosesEntities =
      await this.selectedEstablishedDiagnosesService.find({
        where: { codeNumber },
        relations: ['establishedDiagnoses'],
      });
    const selectedFamilyConstellationEntities =
      await this.selectedFamilyConstellationService.find({
        where: { codeNumber },
        relations: ['familyConstellation'],
      });
    const selectedInterpreterRequiredEntities =
      await this.selectedInterpreterRequiredService.find({
        where: { codeNumber },
        relations: ['interpreterRequired'],
      });
    const selectedOtherInterventionsEntities =
      await this.selectedOtherInterventionsService.find({
        where: { codeNumber },
        relations: ['otherInterventions'],
      });
    const selectedPreviousInterventionEntities =
      await this.selectedPreviousInterventionService.find({
        where: { codeNumber },
        relations: ['previousIntervention'],
      });
    const selectedProblemAreaEntities =
      await this.selectedProblemAreaService.find({
        where: { codeNumber },
        relations: ['problemArea'],
      });
    const selectedReasonForUpdateEntities =
      await this.selectedReasonForUpdateService.find({
        where: { codeNumber },
        relations: ['reasonForUpdate'],
      });
    const selectedSchoolUniformEntities =
      await this.selectedSchoolUniformService.find({
        where: { codeNumber },
        relations: ['schoolUniform'],
      });
    const selectedTypeOfEffortEntities =
      await this.selectedTypeOfEffortService.find({
        where: { codeNumber },
        relations: ['typeOfEffort'],
      });
    const selectedWhoParticipatesEntities =
      await this.selectedWhoParticipatesService.find({
        where: { codeNumber },
        relations: ['whoParticipates'],
      });

    const result: BackgroundDataDto = {
      ...metadata,
      formDataByEntityName: {
        gender: selectedGenderEntities.map(data => data.gender.id),
        educationVh1: selectedEducationVh1Entities.map(
          data => data.educationVh1.id,
        ),
        educationVh2: selectedEducationVh2Entities.map(
          data => data.educationVh2.id,
        ),
        employmentVh1: selectedEmploymentVh1Entities.map(
          data => data.employmentVh1.id,
        ),
        employmentVh2: selectedEmploymentVh2Entities.map(
          data => data.employmentVh2.id,
        ),
        establishedDiagnoses: selectedEstablishedDiagnosesEntities.map(
          data => data.other || data.establishedDiagnoses.id,
        ),
        familyConstellation: selectedFamilyConstellationEntities.map(
          data => data.other || data.familyConstellation.id,
        ),
        interpreterRequired: selectedInterpreterRequiredEntities.map(
          data => data.interpreterRequired.id,
        ),
        otherInterventions: selectedOtherInterventionsEntities.map(
          data => data.other || data.otherInterventions.id,
        ),
        previousIntervention: selectedPreviousInterventionEntities.map(
          data => data.other || data.previousIntervention.id,
        ),
        problemArea: selectedProblemAreaEntities.map(
          data => data.other || data.problemArea.id,
        ),
        reasonForUpdate: selectedReasonForUpdateEntities.map(
          data => data.reasonForUpdate.id,
        ),
        schoolUniform: selectedSchoolUniformEntities.map(
          data => data.schoolUniform.id,
        ),
        typeOfEffort: selectedTypeOfEffortEntities.map(
          data => data.typeOfEffort.id,
        ),
        whoParticipates: selectedWhoParticipatesEntities.map(
          data => data.other || data.whoParticipates.id,
        ),
      },
    };

    return result;
  }

  async getCaseList() {
    const closeStatus = await this.closeStatusService.findAll();
    const backgroundMetadata = await this.backgroundMetadataService.findAll();
    const result = await Promise.all(
      closeStatus.map(async (closeStatusEntity, bgIndex) => {
        const existBackgroundMetadata = backgroundMetadata?.find(
          item => item?.codeNumber == closeStatusEntity?.codeNumber,
        );
        let surveyEntity: any = {
          processor: closeStatusEntity?.processor,
        };

        if (closeStatusEntity?.isAbsent) {
          surveyEntity['codeNumber'] = closeStatusEntity?.codeNumber;
          surveyEntity['isGuardianOne'] =
            closeStatusEntity?.isGuardianOne == null ||
            closeStatusEntity?.isGuardianOne === 'true'
              ? true
              : false;
          surveyEntity['isGuardianTwo'] =
            closeStatusEntity?.isGuardianTwo == null ||
            closeStatusEntity?.isGuardianTwo === 'true'
              ? true
              : false;
          surveyEntity['isChild'] = true;
          surveyEntity['status'] = SurveyStatus.Cancelled;
        } else if (
          existBackgroundMetadata?.codeNumber &&
          dayjs().diff(existBackgroundMetadata?.date, 'month') <= 12
        ) {
          surveyEntity['codeNumber'] = closeStatusEntity?.codeNumber;
          surveyEntity['isGuardianOne'] =
            /* closeStatusEntity?.isGuardianOne == null || */
            closeStatusEntity?.isGuardianOne === 'true'
              ? true
              : false;
          surveyEntity['isGuardianTwo'] =
            /* closeStatusEntity?.isGuardianTwo == null || */
            closeStatusEntity?.isGuardianTwo === 'true'
              ? true
              : false;
          surveyEntity['isChild'] = closeStatusEntity?.isChild || true;
          const scoreEntities = await this.scoreService.find({
            where: { codeNumber: closeStatusEntity.codeNumber },
          });
          let prevOccasionDate = existBackgroundMetadata?.date
            ? dayjs(existBackgroundMetadata?.date)
            : dayjs();
          const details = await Promise.all(
            [...Array(3)].map(async (_it, occasionIndex) => {
              if (scoreEntities?.length > 0) {
                // Exist score for this index
                const entities = scoreEntities.filter(
                  s => s.occasion === occasionIndex + 1,
                );

                const surveyDate =
                  occasionIndex === 0
                    ? prevOccasionDate
                    : occasionIndex === 1
                    ? prevOccasionDate.add(6, 'month')
                    : prevOccasionDate.add(12, 'month');

                const isScanLocked = dayjs().diff(surveyDate, 'week') >= 2;
                const statuses = [...Array(3)].map((_it2, personIndex) => {
                  const scoreEntity = entities
                    .filter(entity => entity.person === personIndex + 1)
                    .at(0);
                  const status =
                    scoreEntity?.score15 && scoreEntity?.ors
                      ? SurveyStatus.Clear
                      : !isScanLocked
                      ? SurveyStatus.Coming
                      : SurveyStatus.Loss;
                  return status;
                });

                const newStatuses = statuses?.map(
                  (newState: SurveyStatus, sIndex: number) => {
                    if (closeStatusEntity.isChild === 'true' && sIndex == 0)
                      return newState;
                    else if (
                      closeStatusEntity.isGuardianOne === 'true' &&
                      sIndex === 1
                    )
                      return newState;
                    else if (
                      closeStatusEntity.isGuardianTwo === 'true' &&
                      sIndex === 2
                    )
                      return newState;
                    else return null;
                  },
                );

                return { date: surveyDate, statuses: newStatuses };
              } else {
                // Not exist score for this index
                const surveyDate =
                  occasionIndex === 0
                    ? prevOccasionDate
                    : occasionIndex === 1
                    ? prevOccasionDate.add(6, 'month')
                    : prevOccasionDate.add(12, 'month');
                const isScanLocked = dayjs().diff(surveyDate, 'week') >= 2;
                const statuses = [...Array(3)].map((_it2, personIndex) => {
                  const status = isScanLocked
                    ? SurveyStatus.Loss
                    : SurveyStatus.Coming;
                  return status;
                });
                return { date: surveyDate?.toDate(), statuses };
              }
            }),
          );
          /*
          Child   => Index 0
          Adult 1 => Index 1
          Adult 2 => Index 2
          */
          let maxParticipates: number = 1;
          if (
            surveyEntity?.isChild &&
            !surveyEntity?.isGuardianOne &&
            !surveyEntity?.isGuardianTwo
          ) {
            maxParticipates = 1;
            // Only Child
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  child: details[0].statuses[0],
                  /* careGiver1: details[0].statuses[1],
                  careGiver2: details[0].statuses[2], */
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  /* careGiver1: details[1].statuses[1],
                  careGiver2: details[1].statuses[2], */
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  /* careGiver1: details[2].statuses[1],
                  careGiver2: details[2].statuses[2], */
                },
              },
            };
          } else if (
            surveyEntity?.isChild &&
            surveyEntity?.isGuardianOne &&
            !surveyEntity?.isGuardianTwo
          ) {
            // Only Child and Guardian One
            maxParticipates = 2;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  child: details[0].statuses[0],
                  careGiver1: details[0].statuses[1],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  careGiver1: details[1].statuses[1],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  careGiver1: details[2].statuses[1],
                },
              },
            };
          } else if (
            surveyEntity?.isChild &&
            !surveyEntity?.isGuardianOne &&
            surveyEntity?.isGuardianTwo
          ) {
            // Only Child and Guardian Two
            maxParticipates = 2;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  child: details[0].statuses[0],
                  careGiver2: details[0].statuses[2],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  careGiver2: details[1].statuses[2],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  careGiver2: details[2].statuses[2],
                },
              },
            };
          } else {
            maxParticipates = 3;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  child: details[0].statuses[0],
                  careGiver1: details[0].statuses[1],
                  careGiver2: details[0].statuses[2],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  careGiver1: details[1].statuses[1],
                  careGiver2: details[1].statuses[2],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  careGiver1: details[2].statuses[1],
                  careGiver2: details[2].statuses[2],
                },
              },
            };
          }
          let nextSurvey = '';
          let signal = '';
          if (
            details[0].statuses.filter(status => status === SurveyStatus.Coming)
              .length >= maxParticipates
          ) {
            signal = '0MonthSurvey';
            nextSurvey = `${dayjs(details[0].date)
              .add(2, 'week')
              .format('YYYY-MM-DD')}`;
          } else if (
            details[0].statuses.filter(status => status === SurveyStatus.Clear)
              .length >= maxParticipates
          ) {
            // Mean there's not 3 person with Comming status => Clear or Loss status inside occasion 0
            if (
              details[1].statuses.filter(
                status => status === SurveyStatus.Coming,
              ).length >= maxParticipates
            ) {
              signal = '6MonthSurvey';
              nextSurvey = `${dayjs(details[1].date)
                .add(2, 'week')
                .format('YYYY-MM-DD')}`;
            } else if (
              details[1].statuses.filter(
                status => status === SurveyStatus.Clear,
              ).length >= maxParticipates
            ) {
              // Mean there's not 3 person with Comming status => Clear or Loss status inside occasion 1
              if (
                details[2].statuses.filter(
                  status => status === SurveyStatus.Coming,
                ).length >= maxParticipates
              ) {
                signal = '12MonthSurvey';
                nextSurvey = `${dayjs(details[2].date)
                  .add(2, 'week')
                  .format('YYYY-MM-DD')}`;
              } else if (
                details[2].statuses.filter(
                  status => status === SurveyStatus.Clear,
                ).length >= maxParticipates
              ) {
                // Mean there's not 3 person with Comming status => Clear or Loss status inside occasion 2
                if (
                  details[0].statuses.filter(
                    status => status === SurveyStatus.Clear,
                  ).length >= maxParticipates &&
                  details[1].statuses.filter(
                    status => status === SurveyStatus.Clear,
                  ).length >= maxParticipates &&
                  details[2].statuses.filter(
                    status => status === SurveyStatus.Clear,
                  ).length >= maxParticipates
                ) {
                  signal = 'ImportantHappeningsDuring12Months';
                  nextSurvey = `${dayjs(details[2].date)
                    .add(4, 'week')
                    .format('YYYY-MM-DD')}`;
                } else if (
                  details[2].statuses.filter(
                    status => status === SurveyStatus.Clear,
                  ).length >= maxParticipates
                ) {
                  signal = 'PostSurvey';
                  nextSurvey = `${dayjs(details[2].date)
                    .add(4, 'week')
                    .format('YYYY-MM-DD')}`;
                }
              }
            }
          }
          let caseStatus: string = '';
          if (
            details[0].statuses.filter(status => status === SurveyStatus.Clear)
              .length >= maxParticipates &&
            details[1].statuses.filter(status => status === SurveyStatus.Clear)
              .length >= maxParticipates &&
            details[2].statuses.filter(status => status === SurveyStatus.Clear)
              .length >= maxParticipates
          ) {
            caseStatus = SurveyStatus.Clear;
          } else if (
            details[0].statuses.filter(status => status === SurveyStatus.Loss)
              .length > 0 ||
            details[1].statuses.filter(status => status === SurveyStatus.Loss)
              .length > 0 ||
            details[2].statuses.filter(status => status === SurveyStatus.Loss)
              .length > 0
          ) {
            caseStatus = SurveyStatus.Loss;
          } else {
            caseStatus = SurveyStatus.Coming;
          }
          surveyEntity['status'] = closeStatusEntity?.status
            ? `${caseStatus} (${SurveyStatus.Incomplete})`
            : caseStatus;
          surveyEntity['isClosed'] =
            closeStatusEntity?.isClosed === 'true' ||
            caseStatus === SurveyStatus.Loss
              ? true
              : false;
          surveyEntity['signal'] = signal;
          surveyEntity['nextSurvey'] = nextSurvey;
          surveyEntity['missedFields'] = '';
        } else if (
          existBackgroundMetadata?.codeNumber &&
          dayjs().diff(existBackgroundMetadata?.date, 'month') > 12
        ) {
          // Archived
          let archivedCodeNumber: string = '';
          if (!closeStatusEntity?.archivedCodeNumber) {
            archivedCodeNumber = `Ark-${generate(
              codeGeneratorSize,
              codeGeneratorChars,
            )}`;
            await this.closeStatusService.update(closeStatusEntity?.id, {
              ...closeStatusEntity,
              archivedCodeNumber,
            });
          } else if (closeStatusEntity?.archivedCodeNumber?.includes('#')) {
            archivedCodeNumber = `Ark-${generate(
              codeGeneratorSize,
              codeGeneratorChars,
            )}`;
            await this.closeStatusService.update(closeStatusEntity?.id, {
              ...closeStatusEntity,
              archivedCodeNumber,
            });
          } else {
            archivedCodeNumber = closeStatusEntity?.archivedCodeNumber;
          }
          surveyEntity['codeNumber'] = archivedCodeNumber;
          surveyEntity['isGuardianOne'] =
            closeStatusEntity?.isGuardianOne == null ||
            closeStatusEntity?.isGuardianOne === 'true'
              ? true
              : false;
          surveyEntity['isGuardianTwo'] =
            closeStatusEntity?.isGuardianTwo == null ||
            closeStatusEntity?.isGuardianTwo === 'true'
              ? true
              : false;
          surveyEntity['isChild'] = true;
          const scoreEntities = await this.scoreService.find({
            where: { codeNumber: closeStatusEntity.codeNumber },
          });
          let prevOccasionDate = existBackgroundMetadata?.date
            ? dayjs(existBackgroundMetadata?.date)
            : dayjs();
          const details = await Promise.all(
            [...Array(3)].map(async (_it, occasionIndex) => {
              if (scoreEntities?.length > 0) {
                // Exist score for this index
                const entities = scoreEntities.filter(
                  s => s.occasion === occasionIndex + 1,
                );

                const surveyDate =
                  occasionIndex === 0
                    ? prevOccasionDate
                    : occasionIndex === 1
                    ? prevOccasionDate.add(6, 'month')
                    : prevOccasionDate.add(12, 'month');

                const isScanLocked = dayjs().diff(surveyDate, 'week') >= 2;
                const statuses = [...Array(3)].map((_it2, personIndex) => {
                  const scoreEntity = entities
                    .filter(entity => entity.person === personIndex + 1)
                    .at(0);
                  const status =
                    scoreEntity?.score15 && scoreEntity?.ors
                      ? SurveyStatus.Clear
                      : !isScanLocked
                      ? SurveyStatus.Coming
                      : SurveyStatus.Loss;
                  return status;
                });

                return { date: surveyDate, statuses };
              } else {
                // Not exist score for this index
                const surveyDate =
                  occasionIndex === 0
                    ? prevOccasionDate
                    : occasionIndex === 1
                    ? prevOccasionDate.add(6, 'month')
                    : prevOccasionDate.add(12, 'month');
                const isScanLocked = dayjs().diff(surveyDate, 'week') >= 2;
                const statuses = [...Array(3)].map((_it2, personIndex) => {
                  const status = isScanLocked
                    ? SurveyStatus.Loss
                    : SurveyStatus.Coming;
                  return status;
                });
                return { date: surveyDate?.toDate(), statuses };
              }
            }),
          );
          /*
          Child   => Index 0
          Adult 1 => Index 1
          Adult 2 => Index 2
          */
          let maxParticipates: number;
          if (
            surveyEntity?.isChild &&
            !surveyEntity?.isGuardianOne &&
            !surveyEntity?.isGuardianTwo
          ) {
            maxParticipates = 1;
            // Only Child
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  child: details[0].statuses[0],
                  /* careGiver1: details[0].statuses[1],
                  careGiver2: details[0].statuses[2], */
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  /* careGiver1: details[1].statuses[1],
                  careGiver2: details[1].statuses[2], */
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  /* careGiver1: details[2].statuses[1],
                  careGiver2: details[2].statuses[2], */
                },
              },
            };
          } else if (
            surveyEntity?.isChild &&
            surveyEntity?.isGuardianOne &&
            !surveyEntity?.isGuardianTwo
          ) {
            // Only Child and Guardian One
            maxParticipates = 2;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  child: details[0].statuses[0],
                  careGiver1: details[0].statuses[1],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  careGiver1: details[1].statuses[1],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  careGiver1: details[2].statuses[1],
                },
              },
            };
          } else if (
            surveyEntity?.isChild &&
            !surveyEntity?.isGuardianOne &&
            surveyEntity?.isGuardianTwo
          ) {
            // Only Child and Guardian Two
            maxParticipates = 2;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  child: details[0].statuses[0],
                  careGiver2: details[0].statuses[2],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  careGiver2: details[1].statuses[2],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  careGiver2: details[2].statuses[2],
                },
              },
            };
          } else if (
            !surveyEntity?.isChild &&
            surveyEntity?.isGuardianOne &&
            surveyEntity?.isGuardianTwo
          ) {
            // Only Guardian One and Guardian Two
            maxParticipates = 2;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  careGiver1: details[0].statuses[1],
                  careGiver2: details[0].statuses[2],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  careGiver1: details[1].statuses[1],
                  careGiver2: details[1].statuses[2],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  careGiver1: details[2].statuses[1],
                  careGiver2: details[2].statuses[2],
                },
              },
            };
          } else if (
            !surveyEntity?.isChild &&
            surveyEntity?.isGuardianOne &&
            !surveyEntity?.isGuardianTwo
          ) {
            // Only Guardian One
            maxParticipates = 1;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  careGiver1: details[0].statuses[1],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  careGiver1: details[1].statuses[1],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  careGiver1: details[2].statuses[1],
                },
              },
            };
          } else if (
            !surveyEntity?.isChild &&
            !surveyEntity?.isGuardianOne &&
            surveyEntity?.isGuardianTwo
          ) {
            // Only Guardian Two
            maxParticipates = 1;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  careGiver2: details[0].statuses[2],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  careGiver2: details[1].statuses[2],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  careGiver2: details[2].statuses[2],
                },
              },
            };
          } else {
            maxParticipates = 3;
            surveyEntity['history'] = {
              zeroMonth: {
                date: details[0].date,
                statusInDetail: {
                  child: details[0].statuses[0],
                  careGiver1: details[0].statuses[1],
                  careGiver2: details[0].statuses[2],
                },
              },
              sixMonths: {
                date: details[1].date,
                statusInDetail: {
                  child: details[1].statuses[0],
                  careGiver1: details[1].statuses[1],
                  careGiver2: details[1].statuses[2],
                },
              },
              twelveMonths: {
                date: details[2].date,
                statusInDetail: {
                  child: details[2].statuses[0],
                  careGiver1: details[2].statuses[1],
                  careGiver2: details[2].statuses[2],
                },
              },
            };
          }
          let nextSurvey = '';
          let signal = '';
          surveyEntity['isClosed'] =
            closeStatusEntity?.isClosed === 'true' ? true : false;
          surveyEntity['signal'] = signal;
          surveyEntity['nextSurvey'] = nextSurvey;
          surveyEntity['missedFields'] = '';
          surveyEntity['nextSurvey'] = '';
          surveyEntity['status'] = SurveyStatus.Archived;
        } else {
          surveyEntity['codeNumber'] = closeStatusEntity?.codeNumber;
          surveyEntity['isGuardianOne'] =
            closeStatusEntity?.isGuardianOne == null ||
            closeStatusEntity?.isGuardianOne === 'true'
              ? true
              : false;
          surveyEntity['isGuardianTwo'] =
            closeStatusEntity?.isGuardianTwo == null ||
            closeStatusEntity?.isGuardianTwo === 'true'
              ? true
              : false;
          surveyEntity['isChild'] =
            closeStatusEntity?.isChild == null ||
            closeStatusEntity?.isChild === 'true'
              ? true
              : false;
          surveyEntity['status'] = SurveyStatus.NoBackgroundData;
        }
        return surveyEntity;
      }),
    );
    return result;
  }

  async downloadDocx(
    codeNumber: string,
    occasion: OccasionIndex | 0,
    appDomain: string,
    childUri: string,
    firstGuardianUri: string,
    secondGuardianUri: string,
    importantEventsUri: string,
  ) {
    try {
      const occasionNum = occasion <= 3 ? occasion : occasion - 3;
      const templatePath =
        occasionNum <= 2
          ? join(
              __dirname,
              '../../',
              'src/assets/template/6-month-survey-bof.docx',
            )
          : join(
              __dirname,
              '../../',
              'src/assets/template/12-month-survey-bof.docx',
            );
      // occasion == 1 || occasion == 2 => 6 months template
      // occasion == 3 => 12 months template with important events
      const content = fs.readFileSync(templatePath, 'binary');
      const pizZip = new PizZip(content);

      const imageOptions = {
        centered: false,
        getImage(tag) {
          return base64Parser(tag);
        },
        getSize() {
          return [150, 150];
        },
      };
      const doc = new Docxtemplater(pizZip, {
        paragraphLoop: true,
        linebreaks: true,
        modules: [new ImageModule(imageOptions)],
      });
      const qrCodeBase64FirstGuardian = await qrcode.toDataURL(
        appDomain + '/survey/bof/quiz/' + firstGuardianUri,
      );
      const qrCodeBase64SecondGuardian = await qrcode.toDataURL(
        appDomain + '/survey/bof/quiz/' + secondGuardianUri,
      );
      const qrCodeBase64ImportantEvents = await qrcode.toDataURL(
        appDomain + '/survey/bof/important-event/' + importantEventsUri,
      );
      const qrCodeBase64Child = await qrcode.toDataURL(
        appDomain + '/survey/bof/quiz/' + childUri,
      );
      doc.render({
        qrCodeFirstGuardian: qrCodeBase64FirstGuardian,
        qrCodeSecondGuardian: qrCodeBase64SecondGuardian,
        qrCodeImportantEvents: qrCodeBase64ImportantEvents,
        qrCodeChild: qrCodeBase64Child,
      });
      const buf = doc.getZip().generate({
        type: 'nodebuffer',
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: 'DEFLATE',
      });
      fs.writeFileSync(destPath, buf);

      return destPath;
    } catch (e) {
      console.error(e);
    }
    return '';
  }
}
