import { Injectable } from '@nestjs/common';
import { FollowUpDataDto, FollowUpMetadataDto, FollowUpSurveyBasicDataDto } from './follow-up-data.dto';
import { FollowUpMetadataService } from './follow-up-metadata.service';
import { InterventionPeriodService } from './intervention-period/intervention-period.service';
import { SelectedInterventionPeriodService } from './intervention-period/selected-intervention-period.service';
import { InterventionProgressService } from './intervention-progress/intervention-progress.service';
import { SelectedInterventionProgressService } from './intervention-progress/selected-intervention-progress.service';
import { ReasonForTerminationService } from './reason-for-termination/reason-for-termination.service';
import { SelectedReasonForTerminationService } from './reason-for-termination/selected-reason-for-termination.service';
import { SelectedTimeConsumptionService } from './time-consumption/selected-time-consumption.service';
import { TimeConsumptionService } from './time-consumption/time-consumption.service';

@Injectable()
export class FollowUpDataService {
  constructor(
    public followUpMetadataService: FollowUpMetadataService,

    public interventionPeriodService: InterventionPeriodService,
    public interventionProgressService: InterventionProgressService,
    public reasonForTerminationService: ReasonForTerminationService,
    public timeConsumptionService: TimeConsumptionService,
   
    public selectedInterventionPeriodService: SelectedInterventionPeriodService,
    public selectedInterventionProgressService: SelectedInterventionProgressService,
    public selectedReasonForTerminationService: SelectedReasonForTerminationService,
    public selectedTimeConsumptionService: SelectedTimeConsumptionService,
  ) { }

  async basicData(): Promise<FollowUpSurveyBasicDataDto> {
    const interventionPeriodEntities = await this.interventionPeriodService.find();
    const interventionProgressEntities = await this.interventionProgressService.find();
    const reasonForTerminationEntities = await this.reasonForTerminationService.find();
    const timeConsumptionEntities = await this.timeConsumptionService.find();

    return {
      interventionPeriodEntities,
      interventionProgressEntities,
      reasonForTerminationEntities,
      timeConsumptionEntities,
    };
  }

  async metadata(): Promise<FollowUpMetadataDto[]> {
    return await this.followUpMetadataService.find();
  }

  async create(payload: FollowUpDataDto): Promise<boolean> {
    try {
      const codeNumber = payload.codeNumber;

      await this.followUpMetadataService.create({
        codeNumber,
        date: payload.date
      });

      await this.selectedInterventionPeriodService.deleteByCodeNumber(codeNumber);
      await this.selectedInterventionProgressService.deleteByCodeNumber(codeNumber);
      await this.selectedReasonForTerminationService.deleteByCodeNumber(codeNumber);
      await this.selectedTimeConsumptionService.deleteByCodeNumber(codeNumber);

      for (const id of payload.formDataByEntityName["interventionPeriod"]) {
        await this.selectedInterventionPeriodService.create({
          codeNumber,
          interventionPeriod: await this.interventionPeriodService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["interventionProgress"]) {
        await this.selectedInterventionProgressService.create({
          codeNumber,
          interventionProgress: await this.interventionProgressService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["reasonForTermination"]) {
        await this.selectedReasonForTerminationService.create(typeof id === "number" ? {
          codeNumber,
          reasonForTermination: await this.reasonForTerminationService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["timeConsumption"]) {
        await this.selectedTimeConsumptionService.create(typeof id === "number" ? {
          codeNumber,
          timeConsumption: await this.timeConsumptionService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      return true;
    }
    catch (e) {
      console.log("follow up data create error: ", e);
      return false;
    }
  }

  async get(codeNumber: string): Promise<FollowUpDataDto> {
    const metadata = await this.followUpMetadataService.findOne({ where: { codeNumber: codeNumber } });
    const selectedInterventionPeriodEntities = await this.selectedInterventionPeriodService.find({ where: { codeNumber }, relations: ["interventionPeriod"] });
    const selectedInterventionProgressEntities = await this.selectedInterventionProgressService.find({ where: { codeNumber }, relations: ["interventionProgress"] });
    const selectedReasonForTerminationEntities = await this.selectedReasonForTerminationService.find({ where: { codeNumber }, relations: ["reasonForTermination"] });
    const selectedTimeConsumptionEntities = await this.selectedTimeConsumptionService.find({ where: { codeNumber }, relations: ["timeConsumption"] });
   
    const result: FollowUpDataDto = {
      ...metadata,
      formDataByEntityName: {
        interventionPeriod: selectedInterventionPeriodEntities.map(data => data.interventionPeriod.id),
        interventionProgress: selectedInterventionProgressEntities.map(data => data.interventionProgress.id),
        reasonForTermination: selectedReasonForTerminationEntities.map(data => data.other || data.reasonForTermination.id),
        timeConsumption: selectedTimeConsumptionEntities.map(data => data.other || data.timeConsumption.id),
      }
    };

    return result;
  };
}
