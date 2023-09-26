import { Injectable } from '@nestjs/common';
import { SurveyStatus } from 'src/core/enums/survey-status';
import { OccasionIndex } from "src/core/models/occasion.modal";
import { FollowUpDataService } from "src/follow-up-survey/follow-up-data.service";
import { ScoreService } from 'src/score/score.service';
import { BackgroundDataDto, BackgroundMetadataDto, BackgroundSurveyBasicDataDto } from './background-data.dto';
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
export class BackgroundDataService {

  constructor(
    public backgroundMetadataService: BackgroundMetadataService,
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
    public selectedWhoParticipatesService: SelectedWhoParticipatesService
  ) { }

  async basicData(): Promise<BackgroundSurveyBasicDataDto> {
    const genderEntities = await this.genderService.find();
    const educationVh1Entities = await this.educationVh1Service.find();
    const educationVh2Entities = await this.educationVh2Service.find();
    const employmentVh1Entities = await this.employmentVh1Service.find();
    const employmentVh2Entities = await this.employmentVh2Service.find();
    const establishedDiagnosesEntities = await this.establishedDiagnosesService.find();
    const familyConstellationEntities = await this.familyConstellationService.find();
    const interpreterRequiredEntities = await this.interpreterRequiredService.find();
    const otherInterventionsEntities = await this.otherInterventionsService.find();
    const previousInterventionEntities = await this.previousInterventionService.find();
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
      whoParticipatesEntities
    };
  }

  async metadata(): Promise<BackgroundMetadataDto[]> {
    return await this.backgroundMetadataService.find();
  }

  async create(payload: BackgroundDataDto): Promise<boolean> {
    try {
      const codeNumber = payload.codeNumber;

      await this.backgroundMetadataService.create({
        codeNumber,
        date: payload.date,
        yearOfBirth: payload.yearOfBirth,
        country: payload.country,
        isClosed: false,
        processor: null
      });

      await this.selectedGenderService.deleteByCodeNumber(codeNumber);
      await this.selectedEducationVh1Service.deleteByCodeNumber(codeNumber);
      await this.selectedEducationVh2Service.deleteByCodeNumber(codeNumber);
      await this.selectedEmploymentVh1Service.deleteByCodeNumber(codeNumber);
      await this.selectedEmploymentVh2Service.deleteByCodeNumber(codeNumber);
      await this.selectedEstablishedDiagnosesService.deleteByCodeNumber(codeNumber);
      await this.selectedFamilyConstellationService.deleteByCodeNumber(codeNumber);
      await this.selectedInterpreterRequiredService.deleteByCodeNumber(codeNumber);
      await this.selectedOtherInterventionsService.deleteByCodeNumber(codeNumber);
      await this.selectedPreviousInterventionService.deleteByCodeNumber(codeNumber);
      await this.selectedProblemAreaService.deleteByCodeNumber(codeNumber);
      await this.selectedReasonForUpdateService.deleteByCodeNumber(codeNumber);
      await this.selectedSchoolUniformService.deleteByCodeNumber(codeNumber);
      await this.selectedTypeOfEffortService.deleteByCodeNumber(codeNumber);
      await this.selectedWhoParticipatesService.deleteByCodeNumber(codeNumber);

      for (const id of payload.formDataByEntityName["gender"]) {
        await this.selectedGenderService.create({
          codeNumber,
          gender: await this.genderService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["educationVh1"]) {
        await this.selectedEducationVh1Service.create({
          codeNumber,
          educationVh1: await this.educationVh1Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["educationVh2"]) {
        await this.selectedEducationVh2Service.create({
          codeNumber,
          educationVh2: await this.educationVh2Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["employmentVh1"]) {
        await this.selectedEmploymentVh1Service.create({
          codeNumber,
          employmentVh1: await this.employmentVh1Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["employmentVh2"]) {
        await this.selectedEmploymentVh2Service.create({
          codeNumber,
          employmentVh2: await this.employmentVh2Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["establishedDiagnoses"]) {
        await this.selectedEstablishedDiagnosesService.create(typeof id === "number" ? {
          codeNumber,
          establishedDiagnoses: await this.establishedDiagnosesService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["familyConstellation"]) {
        await this.selectedFamilyConstellationService.create(typeof id === "number" ? {
          codeNumber,
          familyConstellation: await this.familyConstellationService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["interpreterRequired"]) {
        await this.selectedInterpreterRequiredService.create({
          codeNumber,
          interpreterRequired: await this.interpreterRequiredService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["otherInterventions"]) {
        await this.selectedOtherInterventionsService.create(typeof id === "number" ? {
          codeNumber,
          otherInterventions: await this.otherInterventionsService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["previousIntervention"]) {
        await this.selectedPreviousInterventionService.create(typeof id === "number" ? {
          codeNumber,
          previousIntervention: await this.previousInterventionService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["problemArea"]) {
        await await this.selectedProblemAreaService.create(typeof id === "number" ? {
          codeNumber,
          problemArea: await this.problemAreaService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["reasonForUpdate"]) {
        await this.selectedReasonForUpdateService.create({
          codeNumber,
          reasonForUpdate: await this.reasonForUpdateService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["schoolUniform"]) {
        await this.selectedSchoolUniformService.create({
          codeNumber,
          schoolUniform: await this.schoolUniformService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["typeOfEffort"]) {
        await this.selectedTypeOfEffortService.create({
          codeNumber,
          typeOfEffort: await this.typeOfEffortService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["whoParticipates"]) {
        await this.selectedWhoParticipatesService.create(typeof id === "number" ? {
          codeNumber,
          whoParticipates: await this.whoParticipatesService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      return true;
    }
    catch (e) {
      console.log("background data create error: ", e);
      return false;
    }
  }

  async get(codeNumber: string): Promise<BackgroundDataDto> {
    const metadata = await this.backgroundMetadataService.findOne({ where: { codeNumber: codeNumber } });
    const selectedGenderEntities = await this.selectedGenderService.find({ where: { codeNumber }, relations: ["gender"] });
    const selectedEducationVh1Entities = await this.selectedEducationVh1Service.find({ where: { codeNumber }, relations: ["educationVh1"] });
    const selectedEducationVh2Entities = await this.selectedEducationVh2Service.find({ where: { codeNumber }, relations: ["educationVh2"] });
    const selectedEmploymentVh1Entities = await this.selectedEmploymentVh1Service.find({ where: { codeNumber }, relations: ["employmentVh1"] });
    const selectedEmploymentVh2Entities = await this.selectedEmploymentVh2Service.find({ where: { codeNumber }, relations: ["employmentVh2"] });
    const selectedEstablishedDiagnosesEntities = await this.selectedEstablishedDiagnosesService.find({ where: { codeNumber }, relations: ["establishedDiagnoses"] });
    const selectedFamilyConstellationEntities = await this.selectedFamilyConstellationService.find({ where: { codeNumber }, relations: ["familyConstellation"] });
    const selectedInterpreterRequiredEntities = await this.selectedInterpreterRequiredService.find({ where: { codeNumber }, relations: ["interpreterRequired"] });
    const selectedOtherInterventionsEntities = await this.selectedOtherInterventionsService.find({ where: { codeNumber }, relations: ["otherInterventions"] });
    const selectedPreviousInterventionEntities = await this.selectedPreviousInterventionService.find({ where: { codeNumber }, relations: ["previousIntervention"] });
    const selectedProblemAreaEntities = await this.selectedProblemAreaService.find({ where: { codeNumber }, relations: ["problemArea"] });
    const selectedReasonForUpdateEntities = await this.selectedReasonForUpdateService.find({ where: { codeNumber }, relations: ["reasonForUpdate"] });
    const selectedSchoolUniformEntities = await this.selectedSchoolUniformService.find({ where: { codeNumber }, relations: ["schoolUniform"] });
    const selectedTypeOfEffortEntities = await this.selectedTypeOfEffortService.find({ where: { codeNumber }, relations: ["typeOfEffort"] });
    const selectedWhoParticipatesEntities = await this.selectedWhoParticipatesService.find({ where: { codeNumber }, relations: ["whoParticipates"] });

    const result: BackgroundDataDto = {
      ...metadata,
      formDataByEntityName: {
        gender: selectedGenderEntities.map(data => data.gender.id),
        educationVh1: selectedEducationVh1Entities.map(data => data.educationVh1.id),
        educationVh2: selectedEducationVh2Entities.map(data => data.educationVh2.id),
        employmentVh1: selectedEmploymentVh1Entities.map(data => data.employmentVh1.id),
        employmentVh2: selectedEmploymentVh2Entities.map(data => data.employmentVh2.id),
        establishedDiagnoses: selectedEstablishedDiagnosesEntities.map(data => data.other || data.establishedDiagnoses.id),
        familyConstellation: selectedFamilyConstellationEntities.map(data => data.other || data.familyConstellation.id),
        interpreterRequired: selectedInterpreterRequiredEntities.map(data => data.interpreterRequired.id),
        otherInterventions: selectedOtherInterventionsEntities.map(data => data.other || data.otherInterventions.id),
        previousIntervention: selectedPreviousInterventionEntities.map(data => data.other || data.previousIntervention.id),
        problemArea: selectedProblemAreaEntities.map(data => data.other || data.problemArea.id),
        reasonForUpdate: selectedReasonForUpdateEntities.map(data => data.reasonForUpdate.id),
        schoolUniform: selectedSchoolUniformEntities.map(data => data.schoolUniform.id),
        typeOfEffort: selectedTypeOfEffortEntities.map(data => data.typeOfEffort.id),
        whoParticipates: selectedWhoParticipatesEntities.map(data => data.other || data.whoParticipates.id),
      }
    };

    return result;
  };

  async getCaseList() {
    const backgroundMetadata = await this.backgroundMetadataService.find();
    const result = await Promise.all(backgroundMetadata.map(async (backgroundMetadataEntity, bgIndex) => {
      const scoreEntities = await this.scoreService.find({ where: { codeNumber: backgroundMetadataEntity.codeNumber } });

      let prevOccasionDate = dayjs();

      const details = await Promise.all([...Array(3)].map(async (_it, arrIndex) => {
        const entities = scoreEntities.filter(s => s.occasion === arrIndex + 1);
        const today = dayjs();
        const date = entities.at(0) ? new Date(entities[0].date)
          : (
            arrIndex === 0 ? today
              : arrIndex === 1 ? prevOccasionDate.add(6, "month")
                : prevOccasionDate.add(12, "month")
          ).toDate();

        if (entities.at(0)) {
          prevOccasionDate = dayjs(entities[0].date);
        }

        const isScanLocked = Math.abs(dayjs().diff(date, "week")) > 0;
        const statuses = [...Array(3)].map((_it2, personIndex) => {
          const scoreEntity = entities.filter(entity => entity.person === (personIndex + 1)).at(0);
          const status = (scoreEntity?.score15 && scoreEntity?.ors)
            ? SurveyStatus.Clear
            : !isScanLocked
              ? SurveyStatus.Coming
              : SurveyStatus.Loss;
          return status;
        });

        return { date, statuses };
      }));
      let isAllClear = true;
      let isAllLoss = true;
      let isAllComing = true;
      for (let i = 0; i < details.length; ++i) {
        for (let j = 0; j < details[i].statuses.length; ++j) {
          if (details[i].statuses[j] === SurveyStatus.Clear) {
            isAllClear = false;
          }
           if (details[i].statuses[j] === SurveyStatus.Loss) {
            isAllLoss = false;
          }
          else if (details[i].statuses[j] === SurveyStatus.Coming) {
            isAllComing = false;
          }
        }
      }

      let nextSurvey = dayjs().format("YYYY-MM-DD");
      let signal = "BackgroundSurvey";
      if (details[0].statuses.filter(status => status === SurveyStatus.Clear).length !== 1 &&
        details[0].statuses.filter(status => status === SurveyStatus.Clear).length !== 2 &&
        details[0].statuses.filter(status => status === SurveyStatus.Clear).length !== 3) {
        signal = "BackgroundSurvey";
        nextSurvey = `${dayjs(details[1].date).format("YYYY-MM-DD")}`;
      }
      if (details[0].statuses.filter(status => status === SurveyStatus.Clear).length === 1 ||
        details[0].statuses.filter(status => status === SurveyStatus.Clear).length === 2) {
        signal = "0MonthSurvey";
        nextSurvey = `${dayjs(details[1].date).format("YYYY-MM-DD")}`;
      }
      if (details[0].statuses.filter(status => status === SurveyStatus.Clear).length === 3 &&
        !details[1].statuses.filter(status => status === SurveyStatus.Clear).length) {
        signal = "6MonthSurvey";
        nextSurvey = `${dayjs(details[1].date).format("YYYY-MM-DD")}`;
      }
      if (details[1].statuses.filter(status => status === SurveyStatus.Clear).length === 1 ||
        details[1].statuses.filter(status => status === SurveyStatus.Clear).length === 2) {
        signal = "6MonthSurvey";
        nextSurvey = `${dayjs(details[1].date).format("YYYY-MM-DD")}`;
      }
      if (details[1].statuses.filter(status => status === SurveyStatus.Clear).length === 3 &&
        !details[2].statuses.filter(status => status === SurveyStatus.Clear).length) {
        signal = "12MonthSurvey";
        nextSurvey = `${dayjs(details[2].date).format("YYYY-MM-DD")}`;
      }
      if (details[2].statuses.filter(status => status === SurveyStatus.Clear).length === 1 ||
        details[2].statuses.filter(status => status === SurveyStatus.Clear).length === 2) {
        signal = "12MonthSurvey";
        nextSurvey = `${dayjs(details[2].date).format("YYYY-MM-DD")}`;
      }
      if (details[2].statuses.filter(status => status === SurveyStatus.Clear).length === 3) {
        signal = "PostSurvey";
        nextSurvey = `${dayjs(details[2].date).format("YYYY-MM-DD")}`;
      }
      if (details[0].statuses.filter(status => status === SurveyStatus.Clear).length === 3 &&
        details[1].statuses.filter(status => status === SurveyStatus.Clear).length === 3 &&
        details[2].statuses.filter(status => status === SurveyStatus.Clear).length === 3) {
        signal = "ImportantHappeningsDuring12Months";
        nextSurvey = `${dayjs(details[2].date).format("YYYY-MM-DD")}`;
      }


      const surveyEntity = {
        codeNumber: backgroundMetadataEntity.codeNumber,
        status: isAllClear ? SurveyStatus.Clear : isAllComing ? SurveyStatus.Loss : SurveyStatus.Coming,
        signal,
        missedFields: "",
        history: {
          zeroMonth: {
            date: details[0].date,
            statusInDetail: {
              child: details[0].statuses[0],
              careGiver1: details[0].statuses[1],
              careGiver2: details[0].statuses[2],
            }
          },
          sixMonths: {
            date: details[1].date,
            statusInDetail: {
              child: details[1].statuses[0],
              careGiver1: details[1].statuses[1],
              careGiver2: details[1].statuses[2],
            }
          },
          twelveMonths: {
            date: details[2].date,
            statusInDetail: {
              child: details[2].statuses[0],
              careGiver1: details[2].statuses[1],
              careGiver2: details[2].statuses[2],
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
      const domain = "https://vallentuna-quiz.vercel.app"
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
              domain,
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
