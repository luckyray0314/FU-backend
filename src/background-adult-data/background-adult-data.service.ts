import { Injectable } from '@nestjs/common';
import { SurveyStatus } from 'src/core/enums/survey-status';
import { OccasionIndex } from 'src/core/models/occasion.modal';
import { FollowUpDataService } from 'src/follow-up-survey/follow-up-data.service';
import { AdultScoreService } from 'src/adult-score/adult-score.service';
import { ActionAssignmentService } from './action-assignment/action-assignment.service';
import { SelectedActionAssignmentService } from './action-assignment/selected-action-assignment.service';
import {
  BackgroundAdultDataDto,
  BackgroundAdultMetadataDto,
  BackgroundAdultSurveyBasicDataDto,
} from './background-adult-data.dto';
import { BackgroundAdultMetadataService } from './background-adult-metadata.service';
import { DuringOperationService } from './during-operation/during-operation.service';
import { SelectedDuringOperationService } from './during-operation/selected-during-operation.service';
import { EducationLevelService } from './education-level/education-level.service';
import { SelectedEducationLevelService } from './education-level/selected-education-level.service';
import { EmploymentService } from './employment/employment.service';
import { SelectedEmploymentService } from './employment/selected-employment.service';
import { EstablishDiagnoseService } from './establish-diagnose/establish-diagnose.service';
import { SelectedEstablishDiagnoseService } from './establish-diagnose/selected-establish-diagnose.service';
import { FamilyConstellationAdultService } from './family-constellation/family-constellation.service';
import { SelectedFamilyConstellationAdultService } from './family-constellation/selected-family-constellation.service';
import { GenderAdultService } from './gender/gender.service';
import { SelectedGenderAdultService } from './gender/selected-gender.service';
import { OtherOngoingEffortService } from './other-ongoing-effort/other-ongoing-effort.service';
import { SelectedOtherOngoingEffortService } from './other-ongoing-effort/selected-other-ongoing-effort.service';
import { PreviousEffortService } from './previous-effort/previous-effort.service';
import { SelectedPreviousEffortService } from './previous-effort/selected-previous-effort.service';
import { ProblemAreaAdultService } from './problem-area/problem-area.service';
import { SelectedProblemAreaAdultService } from './problem-area/selected-problem-area.service';
import ImageModule from 'docxtemplater-image-module-free';
import * as qrcode from 'qrcode';

import dayjs = require('dayjs');
import AdmZip = require('adm-zip');
import qr = require('qrcode');
import fs = require('fs');
import path = require('path');
import PizZip = require('pizzip');
import { join } from 'path';
import { base64Parser } from 'src/core/functions/base64-parser.function';
import { CloseStatusAdultService } from 'src/close-status/adult/close.status.adult.service';
import { generate } from 'rand-token';
import {
  codeGeneratorChars,
  codeGeneratorSize,
} from 'src/core/constants/generator.const';
import { CloseStatusAdultDto } from 'src/close-status/adult/close-status.adult.dto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Docxtemplater = require('docxtemplater');
const destPath = `${__dirname}/survey.docx`;

@Injectable()
export class BackgroundAdultDataService {
  constructor(
    public backgroundAdultMetadataService: BackgroundAdultMetadataService,
    public adultCloseStatusService: CloseStatusAdultService,
    public adultScoreService: AdultScoreService,
    public followUpService: FollowUpDataService,

    public genderAdultService: GenderAdultService,
    public actionAssignmentService: ActionAssignmentService,
    public duringOperationService: DuringOperationService,
    public educationLevelService: EducationLevelService,
    public employmentService: EmploymentService,
    public establishDiagnoseService: EstablishDiagnoseService,
    public familyConstellationAdultService: FamilyConstellationAdultService,
    public otherOngoingEffortService: OtherOngoingEffortService,
    public previousEffortService: PreviousEffortService,
    public problemAreaAdultService: ProblemAreaAdultService,

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
  ) {}

  async basicData(): Promise<BackgroundAdultSurveyBasicDataDto> {
    const genderAdultEntities = await this.genderAdultService.find();
    const actionAssignmentEntities = await this.actionAssignmentService.find();
    const duringOperationEntities = await this.duringOperationService.find();
    const educationLevelEntities = await this.educationLevelService.find();
    const employmentEntities = await this.employmentService.find();
    const establishDiagnoseEntities =
      await this.establishDiagnoseService.find();
    const familyConstellationAdultEntities =
      await this.familyConstellationAdultService.find();
    const otherOngoingEffortEntities =
      await this.otherOngoingEffortService.find();
    const previousEffortEntities = await this.previousEffortService.find();
    const problemAreaAdultEntities = await this.problemAreaAdultService.find();

    return {
      genderAdultEntities,
      actionAssignmentEntities,
      duringOperationEntities,
      educationLevelEntities,
      employmentEntities,
      establishDiagnoseEntities,
      familyConstellationAdultEntities,
      otherOngoingEffortEntities,
      previousEffortEntities,
      problemAreaAdultEntities,
    };
  }

  async metadata(): Promise<BackgroundAdultMetadataDto[]> {
    return await this.backgroundAdultMetadataService.find();
  }

  async create(payload: BackgroundAdultDataDto): Promise<boolean> {
    try {
      const codeNumber = payload?.codeNumber;

      await this.backgroundAdultMetadataService.create({
        codeNumber,
        date: payload?.date,
        yearOfBirth: payload?.yearOfBirth,
        country: payload?.country,
      });

      await this.selectedGenderAdultService.deleteByCodeNumber(codeNumber);
      await this.selectedActionAssignmentService.deleteByCodeNumber(codeNumber);
      await this.selectedDuringOperationService.deleteByCodeNumber(codeNumber);
      await this.selectedEducationLevelService.deleteByCodeNumber(codeNumber);
      await this.selectedEmploymentService.deleteByCodeNumber(codeNumber);
      await this.selectedEstablishDiagnoseService.deleteByCodeNumber(
        codeNumber,
      );
      await this.selectedFamilyConstellationAdultService.deleteByCodeNumber(
        codeNumber,
      );
      await this.selectedOtherOngoingEffortService.deleteByCodeNumber(
        codeNumber,
      );
      await this.selectedPreviousEffortService.deleteByCodeNumber(codeNumber);
      await this.selectedProblemAreaAdultService.deleteByCodeNumber(codeNumber);

      for (const id of payload?.formDataByEntityName['genderAdult']) {
        await this.selectedGenderAdultService.create({
          codeNumber,
          genderAdult: await this.genderAdultService.findOne({
            where: { id: +id },
          }),
        });
      }

      for (const id of payload?.formDataByEntityName['actionAssignment']) {
        await this.selectedActionAssignmentService.create({
          codeNumber,
          actionAssignment: await this.actionAssignmentService.findOne({
            where: { id: +id },
          }),
        });
      }

      for (const id of payload?.formDataByEntityName['duringOperation']) {
        await this.selectedDuringOperationService.create({
          codeNumber,
          duringOperation: await this.duringOperationService.findOne({
            where: { id: +id },
          }),
        });
      }

      for (const id of payload?.formDataByEntityName['educationLevel']) {
        await this.selectedEducationLevelService.create({
          codeNumber,
          educationLevel: await this.educationLevelService.findOne({
            where: { id: +id },
          }),
        });
      }

      for (const id of payload?.formDataByEntityName['employment']) {
        await this.selectedEmploymentService.create({
          codeNumber,
          employment: await this.employmentService.findOne({
            where: { id: +id },
          }),
        });
      }

      for (const id of payload?.formDataByEntityName['problemAreaAdult']) {
        await this.selectedProblemAreaAdultService.create({
          codeNumber,
          problemAreaAdult: await this.problemAreaAdultService.findOne({
            where: { id: +id },
          }),
        });
      }

      for (const id of payload?.formDataByEntityName['establishDiagnose']) {
        await this.selectedEstablishDiagnoseService.create({
          codeNumber,
          establishDiagnose: await this.establishDiagnoseService.findOne({
            where: { id: +id },
          }),
        });
      }

      for (const id of payload?.formDataByEntityName[
        'familyConstellationAdult'
      ]) {
        await this.selectedFamilyConstellationAdultService.create({
          codeNumber,
          familyConstellationAdult:
            await this.familyConstellationAdultService.findOne({
              where: { id: +id },
            }),
        });
      }

      for (const id of payload?.formDataByEntityName['otherOngoingEffort']) {
        await this.selectedOtherOngoingEffortService.create({
          codeNumber,
          otherOngoingEffort: await this.otherOngoingEffortService.findOne({
            where: { id: +id },
          }),
        });
      }

      for (const id of payload?.formDataByEntityName['previousEffort']) {
        await this.selectedPreviousEffortService.create({
          codeNumber,
          previousEffort: await this.previousEffortService.findOne({
            where: { id: +id },
          }),
        });
      }

      return true;
    } catch (e) {
      console.log('background adult data create error: ', e);
      return false;
    }
  }

  async get(codeNumber: string): Promise<BackgroundAdultDataDto> {
    const metadata = await this.backgroundAdultMetadataService.findOne({
      where: { codeNumber: codeNumber },
    });
    const selectedGenderAdultEntities =
      await this.selectedGenderAdultService.find({
        where: { codeNumber },
        relations: ['genderAdult'],
      });
    const selectedActionAssignmentEntities =
      await this.selectedActionAssignmentService.find({
        where: { codeNumber },
        relations: ['actionAssignment'],
      });
    const selectedDuringOperationEntities =
      await this.selectedDuringOperationService.find({
        where: { codeNumber },
        relations: ['duringOperation'],
      });
    const selectedEducationLevelEntities =
      await this.selectedEducationLevelService.find({
        where: { codeNumber },
        relations: ['educationLevel'],
      });
    const selectedEmploymentEntities =
      await this.selectedEmploymentService.find({
        where: { codeNumber },
        relations: ['employment'],
      });
    const selectedEstablishDiagnoseEntities =
      await this.selectedEstablishDiagnoseService.find({
        where: { codeNumber },
        relations: ['establishDiagnose'],
      });
    const selectedFamilyConstellationAdultEntities =
      await this.selectedFamilyConstellationAdultService.find({
        where: { codeNumber },
        relations: ['familyConstellationAdult'],
      });
    const selectedOtherOngoingEffortEntities =
      await this.selectedOtherOngoingEffortService.find({
        where: { codeNumber },
        relations: ['otherOngoingEffort'],
      });
    const selectedPreviousEffortEntities =
      await this.selectedPreviousEffortService.find({
        where: { codeNumber },
        relations: ['previousEffort'],
      });
    const selectedProblemAreaAdultEntities =
      await this.selectedProblemAreaAdultService.find({
        where: { codeNumber },
        relations: ['problemAreaAdult'],
      });

    const result: BackgroundAdultDataDto = {
      ...metadata,
      formDataByEntityName: {
        genderAdult: selectedGenderAdultEntities.map(
          data => data.genderAdult.id,
        ),
        actionAssignment: selectedActionAssignmentEntities.map(
          data => data.actionAssignment.id,
        ),
        duringOperation: selectedDuringOperationEntities.map(
          data => data.duringOperation.id,
        ),
        educationLevel: selectedEducationLevelEntities.map(
          data => data.educationLevel.id,
        ),
        employment: selectedEmploymentEntities.map(data => data.employment.id),
        establishDiagnose: selectedEstablishDiagnoseEntities.map(
          data => data.establishDiagnose.id,
        ),
        familyConstellationAdult: selectedFamilyConstellationAdultEntities.map(
          data => data.familyConstellationAdult.id,
        ),
        otherOngoingEffort: selectedOtherOngoingEffortEntities.map(
          data => data.otherOngoingEffort.id,
        ),
        previousEffort: selectedPreviousEffortEntities.map(
          data => data.previousEffort.id,
        ),
        problemAreaAdult: selectedProblemAreaAdultEntities.map(
          data => data.problemAreaAdult.id,
        ),
      },
    };

    return result;
  }

  async getCaseList() {
    const closeStatus = await this.adultCloseStatusService.findAll();
    const backgroundAdultMetadata =
      await this.backgroundAdultMetadataService.findAll();
    const result = await Promise.all(
      closeStatus.map(async (adulCloseStatusEntity: any, bgIndex) => {
        const existBackgroundMetadata = backgroundAdultMetadata?.find(
          item => item?.codeNumber == adulCloseStatusEntity?.codeNumber,
        );
        let surveyEntity: any = {
          processor: adulCloseStatusEntity?.processor,
        };
        if (adulCloseStatusEntity?.isAbsent) {
          surveyEntity['codeNumber'] = adulCloseStatusEntity?.codeNumber;
          surveyEntity['status'] = SurveyStatus.Cancelled;
        } else if (
          existBackgroundMetadata?.codeNumber &&
          dayjs().diff(existBackgroundMetadata?.date, 'month') <= 12
        ) {
          surveyEntity['codeNumber'] = adulCloseStatusEntity?.codeNumber;
          const scoreEntities = await this.adultScoreService.find({
            where: { codeNumber: existBackgroundMetadata.codeNumber },
          });
          let prevOccasionDate = existBackgroundMetadata?.date
            ? dayjs(existBackgroundMetadata?.date)
            : dayjs();
          const today = dayjs();
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
                const statuses = [...Array(1)].map((_it2, personIndex) => {
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
                const statuses = [...Array(1)].map((_it2, personIndex) => {
                  const status = isScanLocked
                    ? SurveyStatus.Loss
                    : SurveyStatus.Coming;
                  return status;
                });
                return { date: surveyDate?.toDate(), statuses };
              }
            }),
          );
          let nextSurvey = '';
          let signal = '';
          const maxParticipates: number = 1;
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
            (details[0].statuses.filter(status => status === SurveyStatus.Loss)
              .length > 0 &&
              details[0].statuses.filter(status => status === SurveyStatus.Loss)
                .length <= maxParticipates) ||
            (details[1].statuses.filter(status => status === SurveyStatus.Loss)
              .length > 0 &&
              details[1].statuses.filter(status => status === SurveyStatus.Loss)
                .length <= maxParticipates) ||
            (details[2].statuses.filter(status => status === SurveyStatus.Loss)
              .length > 0 &&
              details[2].statuses.filter(status => status === SurveyStatus.Loss)
                .length <= maxParticipates)
          ) {
            caseStatus = SurveyStatus.Loss;
          } else {
            caseStatus = SurveyStatus.Coming;
          }
          surveyEntity['status'] = adulCloseStatusEntity?.status
            ? `${caseStatus} (${SurveyStatus.Incomplete})`
            : caseStatus;
          surveyEntity['isClosed'] =
            adulCloseStatusEntity?.isClosed === 'true' ? true : false;
          surveyEntity['signal'] = signal;
          surveyEntity['nextSurvey'] = nextSurvey;
          surveyEntity['missedFields'] = '';
          surveyEntity['history'] = {
            zeroMonth: {
              date: details[0].date,
              statusInDetail: {
                adult: details[0].statuses[0],
              },
            },
            sixMonths: {
              date: details[1].date,
              statusInDetail: {
                adult: details[1].statuses[0],
              },
            },
            twelveMonths: {
              date: details[2].date,
              statusInDetail: {
                adult: details[2].statuses[0],
              },
            },
          };
        } else if (
          existBackgroundMetadata &&
          dayjs().diff(existBackgroundMetadata?.date, 'month') > 12
        ) {
          let archivedCodeNumber: string = '';
          if (!adulCloseStatusEntity?.archivedCodeNumber) {
            archivedCodeNumber = `Ark-${generate(
              codeGeneratorSize,
              codeGeneratorChars,
            )}`;
            await this.adultCloseStatusService.update(
              adulCloseStatusEntity?.id,
              {
                ...adulCloseStatusEntity,
                archivedCodeNumber,
              },
            );
          } else {
            archivedCodeNumber = adulCloseStatusEntity?.archivedCodeNumber;
          }
          surveyEntity['codeNumber'] = archivedCodeNumber;
          const scoreEntities = await this.adultScoreService.find({
            where: { codeNumber: existBackgroundMetadata.codeNumber },
          });
          let prevOccasionDate = dayjs();
          const details = await Promise.all(
            [...Array(3)].map(async (_it, arrIndex) => {
              const entities = scoreEntities.filter(
                s => s.occasion === arrIndex + 1,
              );
              const today = dayjs();
              const date = entities.at(0)
                ? new Date(entities[0].date)
                : (arrIndex === 0
                    ? today
                    : arrIndex === 1
                    ? prevOccasionDate.add(6, 'month')
                    : prevOccasionDate.add(12, 'month')
                  ).toDate();

              if (entities.at(0)) {
                prevOccasionDate = dayjs(entities[0].date);
              }

              const isScanLocked = Math.abs(dayjs().diff(date, 'week')) > 0;

              const statuses = [...Array(1)].map((_it2, personIndex) => {
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

              return { date, statuses };
            }),
          );
          surveyEntity['signal'] = '';
          surveyEntity['missedFields'] = '';
          surveyEntity['nextSurvey'] = '';
          surveyEntity['history'] = {
            zeroMonth: {
              date: details[0].date,
              statusInDetail: {
                adult: details[0].statuses[0],
              },
            },
            sixMonths: {
              date: details[1].date,
              statusInDetail: {
                adult: details[1].statuses[0],
              },
            },
            twelveMonths: {
              date: details[2].date,
              statusInDetail: {
                adult: details[2].statuses[0],
              },
            },
          };
          surveyEntity['status'] = SurveyStatus.Archived;
        } else {
          surveyEntity['codeNumber'] = adulCloseStatusEntity?.codeNumber;
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
    adultUri: string,
    importantEventsUri: string,
  ) {
    try {
      const occasionNum = occasion <= 3 ? occasion : occasion - 3;
      const templatePath =
        occasionNum <= 2
          ? join(
              __dirname,
              '../../',
              'src/assets/template/6-month-survey-vux.docx',
            )
          : join(
              __dirname,
              '../../',
              'src/assets/template/12-month-survey-vux.docx',
            );

      // occasion == 1 || occasion == 2 => 6 months template
      // occasion == 3 => 12 months template
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
      const qrCodeBase64Adult = await qrcode.toDataURL(
        appDomain + '/survey/vux/quiz/' + adultUri,
      );
      const qrCodeBase64ImportantEvents = await qrcode.toDataURL(
        appDomain + '/survey/vux/important-event/' + importantEventsUri,
      );
      doc.render({
        qrCodeAdult: qrCodeBase64Adult,
        qrCodeImportantEvents: qrCodeBase64ImportantEvents,
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
