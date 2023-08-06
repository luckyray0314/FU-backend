import { Injectable } from '@nestjs/common';
import { ChildSchoolService } from '../important-events/child-school/child-school.service';
import { SelectedChildSchoolService } from '../important-events/child-school/selected-child-school.service';
import { DuringInterventionService } from '../important-events/during-intervention/during-intervention.service';
import { SelectedDuringInterventionService } from '../important-events/during-intervention/selected-during-intervention.service';
import { DuringPastService } from '../important-events/during-past/during-past.service';
import { SelectedDuringPastService } from '../important-events/during-past/selected-during-past.service';
import { OtherInterventionsStartedService } from '../important-events/otherinterventions-started/otherinterventions-started.service';
import { SelectedOtherInterventionsStartedService } from '../important-events/otherinterventions-started/selected-otherinterventions-started.service';
import { ImportantEventsBasicDataDto, ImportantEventsDataDto } from './important-events.dto';
import { ChangeAccomodationService } from './change-accomodation/change-accomodation.service';
import { SelectedChangeAccomodationService } from './change-accomodation/selected-change-accomodation.service';
import { ChangeEmploymentVh1Service } from './change-employment-vh1/change-employment-vh1.service';
import { ChangeEmploymentVh2Service } from './change-employment-vh2/change-employment-vh2.service';
import { SelectedChangeEmploymentVh1Service } from './change-employment-vh1/selected-change-employment-vh1.service';
import { SelectedChangeEmploymentVh2Service } from './change-employment-vh2/selected-change-employment-vh2.service';

@Injectable()
export class ImportantEventsService {
  constructor(
    public otherInterventionsStartedService: OtherInterventionsStartedService,
    public duringInterventionService: DuringInterventionService,
    public duringPastService: DuringPastService,
    public childSchoolService: ChildSchoolService,
    public changeAccomodationService: ChangeAccomodationService,
    public changeEmploymentVh1Service: ChangeEmploymentVh1Service,
    public changeEmploymentVh2Service: ChangeEmploymentVh2Service,

    public selectedOtherInterventionsStartedService: SelectedOtherInterventionsStartedService,
    public selectedDuringInterventionService: SelectedDuringInterventionService,
    public selectedDuringPastService: SelectedDuringPastService,
    public selectedChildSchoolService: SelectedChildSchoolService,
    public selectedChangeAccomodationService: SelectedChangeAccomodationService,
    public selectedChangeEmploymentVh1Service: SelectedChangeEmploymentVh1Service,
    public selectedChangeEmploymentVh2Service: SelectedChangeEmploymentVh2Service,
  ) { }

  async basicData(): Promise<ImportantEventsBasicDataDto> {

    const otherInterventionsStartedEntities = await this.otherInterventionsStartedService.find();
    const duringInterventionEntities = await this.duringInterventionService.find();
    const duringPastEntities = await this.duringPastService.find();
    const childSchoolEntities = await this.childSchoolService.find();
    const changeAccomodationEntities = await this.changeAccomodationService.find();
    const changeEmploymentVh1Entities = await this.changeEmploymentVh1Service.find();
    const changeEmploymentVh2Entities = await this.changeEmploymentVh2Service.find();

    return {
      otherInterventionsStartedEntities,
      duringInterventionEntities,
      duringPastEntities,
      childSchoolEntities,
      changeAccomodationEntities,
      changeEmploymentVh1Entities,
      changeEmploymentVh2Entities
    };
  }

  async get(codeNumber: string): Promise<ImportantEventsDataDto> {
    const selectedOtherInterventionsStartedEntities = await this.selectedOtherInterventionsStartedService.find({ where: { codeNumber }, relations: ["otherInterventionsStarted"] });
    const selectedDuringInterventionEntities = await this.selectedDuringInterventionService.find({ where: { codeNumber }, relations: ["duringIntervention"] });
    const selectedDuringPastEntities = await this.selectedDuringPastService.find({ where: { codeNumber }, relations: ["duringPast"] });
    const selectedChildSchoolEntities = await this.selectedChildSchoolService.find({ where: { codeNumber }, relations: ["childSchool"] });
    const selectedChangeAccomodationEntities = await this.selectedChangeAccomodationService.find({ where: { codeNumber }, relations: ["changeAccomodation"] });
    const selectedChangeEmploymentVh1Entities = await this.selectedChangeEmploymentVh1Service.find({ where: { codeNumber }, relations: ["changeEmploymentVh1"] });
    const selectedChangeEmploymentVh2Entities = await this.selectedChangeEmploymentVh2Service.find({ where: { codeNumber }, relations: ["changeEmploymentVh2"] });

    const result: ImportantEventsDataDto = {
      codeNumber,
      formDataByEntityName: {
        otherInterventionsStarted: selectedOtherInterventionsStartedEntities.map(data => data.otherInterventionsStarted.id),
        duringIntervention: selectedDuringInterventionEntities.map(data => data.duringIntervention.id),
        duringPast: selectedDuringPastEntities.map(data => data.duringPast.id),
        childSchool: selectedChildSchoolEntities.map(data => data.childSchool.id),
        changeAccomodation: selectedChangeAccomodationEntities.map(data => data.changeAccomodation.id),
        changeEmploymentVh1: selectedChangeEmploymentVh1Entities.map(data => data.changeEmploymentVh1.id),
        changeEmploymentVh2: selectedChangeEmploymentVh2Entities.map(data => data.changeEmploymentVh2.id),
      }
    };
    return result;
  };

  async save(payload: ImportantEventsDataDto): Promise<boolean> {
    try {
      const codeNumber = payload.codeNumber;

      await this.selectedOtherInterventionsStartedService.deleteByCodeNumber(codeNumber);
      await this.selectedDuringInterventionService.deleteByCodeNumber(codeNumber);
      await this.selectedDuringPastService.deleteByCodeNumber(codeNumber);
      await this.selectedChildSchoolService.deleteByCodeNumber(codeNumber);
      await this.selectedChangeAccomodationService.deleteByCodeNumber(codeNumber);
      await this.selectedChangeEmploymentVh1Service.deleteByCodeNumber(codeNumber);
      await this.selectedChangeEmploymentVh2Service.deleteByCodeNumber(codeNumber);

      for (const id of payload.formDataByEntityName["otherInterventionsStarted"]) {
        await this.selectedOtherInterventionsStartedService.create({
          codeNumber,
          otherInterventionsStarted: await this.otherInterventionsStartedService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["duringIntervention"]) {
        await this.selectedDuringInterventionService.create({
          codeNumber,
          duringIntervention: await this.duringInterventionService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["duringPast"]) {
        await this.selectedDuringPastService.create({
          codeNumber,
          duringPast: await this.duringPastService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["childSchool"]) {
        await this.selectedChildSchoolService.create({
          codeNumber,
          childSchool: await this.childSchoolService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["changeAccomodation"]) {
        await this.selectedChangeAccomodationService.create({
          codeNumber,
          changeAccomodation: await this.changeAccomodationService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["changeEmploymentVh1"]) {
        await this.selectedChangeEmploymentVh1Service.create({
          codeNumber,
          changeEmploymentVh1: await this.changeEmploymentVh1Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["changeEmploymentVh2"]) {
        await this.selectedChangeEmploymentVh2Service.create({
          codeNumber,
          changeEmploymentVh2: await this.changeEmploymentVh2Service.findOne({ where: { id: +id } })
        });
      }

      return true;
    }
    catch (e) {
      console.log("important events data create error: ", e);
      return false;
    }
  }
}
