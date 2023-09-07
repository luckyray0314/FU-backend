import { Injectable } from '@nestjs/common';
import { SurveyStatus } from 'src/core/enums/survey-status';
import { OccasionIndex } from "src/core/models/occasion.modal";
import { FollowUpDataService } from "src/follow-up-survey/follow-up-data.service";
import { AdultScoreService } from 'src/adult-score/adult-score.service';
import { ActionAssignmentService } from './action-assignment/action-assignment.service';
import { SelectedActionAssignmentService } from './action-assignment/selected-action-assignment.service';
import { BackgroundAdultDataDto, BackgroundAdultMetadataDto, BackgroundAdultSurveyBasicDataDto } from './background-adult-data.dto';
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

import dayjs = require('dayjs');
import AdmZip = require("adm-zip");
import qr = require("qrcode");
import fs = require("fs");
import path = require("path");
import PizZip = require("pizzip");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Docxtemplater = require("docxtemplater");
const template1Path = `${__dirname}/template1.docx`;
const template2Path = `${__dirname}/template2.docx`;
const middlePath = `${__dirname}/middle.docx`;
const destPath = `${__dirname}/survey.docx`;

@Injectable()
export class BackgroundAdultDataService {
  constructor(
    public backgroundAdultMetadataService: BackgroundAdultMetadataService,
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

  ) { }

  async basicData(): Promise<BackgroundAdultSurveyBasicDataDto> {
    const genderAdultEntities = await this.genderAdultService.find();
    const actionAssignmentEntities = await this.actionAssignmentService.find();
    const duringOperationEntities = await this.duringOperationService.find();
    const educationLevelEntities = await this.educationLevelService.find();
    const employmentEntities = await this.employmentService.find();
    const establishDiagnoseEntities = await this.establishDiagnoseService.find();
    const familyConstellationAdultEntities = await this.familyConstellationAdultService.find();
    const otherOngoingEffortEntities = await this.otherOngoingEffortService.find();
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
      const codeNumber = payload.codeNumber;

      await this.backgroundAdultMetadataService.create({
        codeNumber,
        date: payload.date,
        yearOfBirth: payload.yearOfBirth,
        country: payload.country
      });

      await this.selectedGenderAdultService.deleteByCodeNumber(codeNumber);
      await this.selectedActionAssignmentService.deleteByCodeNumber(codeNumber);
      await this.selectedDuringOperationService.deleteByCodeNumber(codeNumber);
      await this.selectedEducationLevelService.deleteByCodeNumber(codeNumber);
      await this.selectedEmploymentService.deleteByCodeNumber(codeNumber);
      await this.selectedEstablishDiagnoseService.deleteByCodeNumber(codeNumber);
      await this.selectedFamilyConstellationAdultService.deleteByCodeNumber(codeNumber);
      await this.selectedOtherOngoingEffortService.deleteByCodeNumber(codeNumber);
      await this.selectedPreviousEffortService.deleteByCodeNumber(codeNumber);
      await this.selectedProblemAreaAdultService.deleteByCodeNumber(codeNumber);

      for (const id of payload.formDataByEntityName["genderAdult"]) {
        await this.selectedGenderAdultService.create({
          codeNumber,
          genderAdult: await this.genderAdultService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["actionAssignment"]) {
        await this.selectedActionAssignmentService.create({
          codeNumber,
          actionAssignment: await this.actionAssignmentService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["duringOperation"]) {
        await this.selectedDuringOperationService.create({
          codeNumber,
          duringOperation: await this.duringOperationService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["educationLevel"]) {
        await this.selectedEducationLevelService.create({
          codeNumber,
          educationLevel: await this.educationLevelService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["employment"]) {
        await this.selectedEmploymentService.create({
          codeNumber,
          employment: await this.employmentService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["problemAreaAdult"]) {
        await this.selectedProblemAreaAdultService.create({
          codeNumber,
          problemAreaAdult: await this.problemAreaAdultService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["establishDiagnose"]) {
        await this.selectedEstablishDiagnoseService.create({
          codeNumber,
          establishDiagnose: await this.establishDiagnoseService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["familyConstellationAdult"]) {
        await this.selectedFamilyConstellationAdultService.create({
          codeNumber,
          familyConstellationAdult: await this.familyConstellationAdultService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["otherOngoingEffort"]) {
        await this.selectedOtherOngoingEffortService.create({
          codeNumber,
          otherOngoingEffort: await this.otherOngoingEffortService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["previousEffort"]) {
        await this.selectedPreviousEffortService.create({
          codeNumber,
          previousEffort: await this.previousEffortService.findOne({ where: { id: +id } })
        });
      }


      return true;
    }
    catch (e) {
      console.log("background adult data create error: ", e);
      return false;
    }
  }

  async get(codeNumber: string): Promise<BackgroundAdultDataDto> {
    const metadata = await this.backgroundAdultMetadataService.findOne({ where: { codeNumber: codeNumber } });
    const selectedGenderAdultEntities = await this.selectedGenderAdultService.find({ where: { codeNumber }, relations: ["genderAdult"] });
    const selectedActionAssignmentEntities = await this.selectedActionAssignmentService.find({ where: { codeNumber }, relations: ["actionAssignment"] });
    const selectedDuringOperationEntities = await this.selectedDuringOperationService.find({ where: { codeNumber }, relations: ["duringOperation"] });
    const selectedEducationLevelEntities = await this.selectedEducationLevelService.find({ where: { codeNumber }, relations: ["educationLevel"] });
    const selectedEmploymentEntities = await this.selectedEmploymentService.find({ where: { codeNumber }, relations: ["employment"] });
    const selectedEstablishDiagnoseEntities = await this.selectedEstablishDiagnoseService.find({ where: { codeNumber }, relations: ["establishDiagnose"] });
    const selectedFamilyConstellationAdultEntities = await this.selectedFamilyConstellationAdultService.find({ where: { codeNumber }, relations: ["familyConstellationAdult"] });
    const selectedOtherOngoingEffortEntities = await this.selectedOtherOngoingEffortService.find({ where: { codeNumber }, relations: ["otherOngoingEffort"] });
    const selectedPreviousEffortEntities = await this.selectedPreviousEffortService.find({ where: { codeNumber }, relations: ["previousEffort"] });
    const selectedProblemAreaAdultEntities = await this.selectedProblemAreaAdultService.find({ where: { codeNumber }, relations: ["problemAreaAdult"] });

    const result: BackgroundAdultDataDto = {
      ...metadata,
      formDataByEntityName: {
        gender: selectedGenderAdultEntities.map(data => data.genderAdult.id),
        actionAssignment: selectedActionAssignmentEntities.map(data => data.actionAssignment.id),
        duringOperation: selectedDuringOperationEntities.map(data => data.duringOperation.id),
        educationLevel: selectedEducationLevelEntities.map(data => data.educationLevel.id),
        employment: selectedEmploymentEntities.map(data => data.employment.id),
        establishDiagnose: selectedEstablishDiagnoseEntities.map(data => data.establishDiagnose.id),
        familyConstellationAdult: selectedFamilyConstellationAdultEntities.map(data => data.familyConstellationAdult.id),
        otherOngoingEffort: selectedOtherOngoingEffortEntities.map(data => data.otherOngoingEffort.id),
        previousEffort: selectedPreviousEffortEntities.map(data => data.previousEffort.id),
        problemAreaAdult: selectedProblemAreaAdultEntities.map(data => data.problemAreaAdult.id),

      }
    };

    return result;
  };

  async getCaseList() {
    const backgroundAdultMetadata = await this.backgroundAdultMetadataService.find();
    const result = await Promise.all(backgroundAdultMetadata.map(async (backgroundAdultMetadataEntity, bgIndex) => {
      const scoreEntities = await this.adultScoreService.find({ where: { codeNumber: backgroundAdultMetadataEntity.codeNumber } });

      let prevOccasionDate = dayjs();

      const details = await Promise.all([...Array(3)].map(async (_it, arrIndex) => {
        const scoreEntity = scoreEntities.find(s => s.occasion === arrIndex + 1);
        const today = dayjs();
        const date = scoreEntity ? new Date(scoreEntity.date)
          : (
            arrIndex === 0 ? today
              : arrIndex === 1 ? prevOccasionDate.add(6, "month")
                : prevOccasionDate.add(12, "month")
          ).toDate();

        if (scoreEntity) {
          prevOccasionDate = dayjs(scoreEntity.date);
        }

        const statuses = [...Array(3)].map((_it2, personIndex) => {
          const scoreEntity = scoreEntities.find(entity => entity.person === (personIndex + 1));
          const status = (scoreEntity?.score15 && scoreEntity?.ors) ? SurveyStatus.Clear
            : (scoreEntity?.score15 || scoreEntity?.ors) ? SurveyStatus.Coming
              : SurveyStatus.Loss;
          return status;
        });

        return { date, statuses };
      }));
      let isAllClear = true;
      let isAllLoss = true;
      for (let i = 0; i < details.length; ++i) {
          if (details[i].statuses[0] === SurveyStatus.Clear) {
            isAllLoss = false;
          }
          else if (details[i].statuses[0] === SurveyStatus.Loss) {
            isAllClear = false;
          }
        
      }

      let nextSurvey = dayjs().format("YYYY-MM-DD");
      let signal = "BackgroundSurvey";
      if (details[0].statuses.filter(status => status === SurveyStatus.Clear).length !== 1 ) {
        signal = "BackgroundSurvey";
        nextSurvey = `${dayjs(details[0].date).format("YYYY-MM-DD")}`;
      }
      if (details[0].statuses.filter(status => status === SurveyStatus.Clear).length === 1 &&
        details[1].statuses.filter(status => status === SurveyStatus.Clear).length !== 1) {
          signal = "6MonthSurvey";
        nextSurvey = `${dayjs(details[1].date).format("YYYY-MM-DD")}`;
      }
      if (details[1].statuses.filter(status => status === SurveyStatus.Clear).length === 1 &&
        details[2].statuses.filter(status => status === SurveyStatus.Clear).length !== 1) {
          signal = "12MonthSurvey";
        nextSurvey = `${dayjs(details[2].date).format("YYYY-MM-DD")}`;
      }
      if (details[2].statuses.filter(status => status === SurveyStatus.Clear).length === 1) {
        signal = "PostSurvey";
        nextSurvey = `${dayjs(details[2].date).format("YYYY-MM-DD")}`;
      }
      if (details[0].statuses.filter(status => status === SurveyStatus.Clear).length === 1 &&
        details[1].statuses.filter(status => status === SurveyStatus.Clear).length === 1 &&
        details[2].statuses.filter(status => status === SurveyStatus.Clear).length === 1) {
          signal = "ImportantHappeningsDuring12Months";
        nextSurvey = `${dayjs(details[2].date).format("YYYY-MM-DD")}`;
      }

      const surveyEntity = {
        codeNumber: backgroundAdultMetadataEntity.codeNumber,
        status: isAllClear ? SurveyStatus.Clear : isAllLoss ? SurveyStatus.Loss : SurveyStatus.Coming,
        signal,
        missedFields: "",
        history: {
          zeroMonth: {
            date: details[0].date,
            statusInDetail: {
              child: details[0].statuses[0]
            }
          },
          sixMonths: {
            date: details[1].date,
            statusInDetail: {
              child: details[1].statuses[0]
            }
          },
          twelveMonths: {
            date: details[2].date,
            statusInDetail: {
              child: details[2].statuses[0]
            }
          },
        },
        nextSurvey
      };
      return surveyEntity;
    }));
    return result;
  }

  async downloadDocx(codeNumber: string, occasion: OccasionIndex | 0) {
    try {
      const templatePath = occasion === 0 ? template2Path : template1Path;

      // replace {DATE} to today
      const content = fs.readFileSync(templatePath, "binary");
      const pizZip = new PizZip(content);
      const doc = new Docxtemplater(pizZip, {
        paragraphLoop: true,
        linebreaks: true,
      });
      doc.render({
        date: dayjs().format("YYYY-MM-DD"),
      });
      const buf = doc.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
      });
      fs.writeFileSync(middlePath, buf);

      // replace QR code
      const zip = new AdmZip(middlePath);

      if (occasion !== 0) {
        const zipEntries = zip.getEntries();
        let person = 1;

        for await (const zipEntry of zipEntries) {
          if (/^word\/media\/image.+png$/.test(zipEntry.entryName)) {
            const qrCodeString = btoa(btoa(btoa(JSON.stringify({
              codeNumber,
              person: person,
              occasion,
              score15: 0,
              ors: 0
            }))));
            const qrCodeContent = await qr.toBuffer(qrCodeString, {
              errorCorrectionLevel: 'H',
              margin: 1,
              width: 128,
              type: 'png',
            });
            zip.updateFile(zipEntry.entryName, qrCodeContent);
            person += 1;
          }
        }
      }

      const buffer = zip.toBuffer();
      fs.writeFileSync(destPath, buffer);
      return destPath;
    }
    catch (e) {
      console.error(e);
    }
    return "";
  }
}
