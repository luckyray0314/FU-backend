import { Injectable } from '@nestjs/common';
import { ImportantEventsVuxBasicDataDto, ImportantEventsVuxDataDto } from './important-events-vux.dto';
import { ChangeLiveService } from './change-live/change-live.service';
import { SelectedChangeLiveService } from './change-live/selected-change-live.service';
import { ChangeOverService } from './change-over/change-over.service';
import { InvestigationOutService } from './investigation-out/investigation-out.service';
import { OtherInitiativeService } from './other-initiative/other-initiative.service';
import { SelectedChangeOverService } from './change-over/selected-change-over.service';
import { SelectedInvestigationOutService } from './investigation-out/selected-investigation-out.service';
import { SelectedOtherInitiativeService } from './other-initiative/selected-other-initiative.service';

@Injectable()
export class ImportantEventsVuxService {
  constructor(
    public changeLiveService: ChangeLiveService,
    public changeOverService: ChangeOverService,
    public investigationOutService: InvestigationOutService,
    public otherInitiativeService: OtherInitiativeService,

    public selectedChangeLiveService: SelectedChangeLiveService,
    public selectedChangeOverService: SelectedChangeOverService,
    public selectedInvestigationOutService: SelectedInvestigationOutService,
    public selectedOtherInitiativeService: SelectedOtherInitiativeService,

  ) { }

  async basicData(): Promise<ImportantEventsVuxBasicDataDto> {

    const changeLiveEntities = await this.changeLiveService.find();
    const changeOverEntities = await this.changeOverService.find();
    const investigationOutEntities = await this.investigationOutService.find();
    const otherInitiativeEntities = await this.otherInitiativeService.find();

    return {
      changeLiveEntities,
      changeOverEntities,
      investigationOutEntities,
      otherInitiativeEntities
    };
  }

  async get(codeNumber: string): Promise<ImportantEventsVuxDataDto> {
    const selectedChangeLiveEntities = await this.selectedChangeLiveService.find({ where: { codeNumber }, relations: ["changeLive"] });
    const selectedChangeOverEntities = await this.selectedChangeOverService.find({ where: { codeNumber }, relations: ["changeOver"] });
    const selectedInvestigationOutEntities = await this.selectedInvestigationOutService.find({ where: { codeNumber }, relations: ["investigationOut"] });
    const selectedOtherInitiativeEntities = await this.selectedOtherInitiativeService.find({ where: { codeNumber }, relations: ["otherInitiative"] });


    const result: ImportantEventsVuxDataDto = {
      codeNumber,
      formDataByEntityName: {
        changeLive: selectedChangeLiveEntities.map(data => data.changeLive.id),
        changeOver: selectedChangeOverEntities.map(data => data.changeOver.id),
        investigationOut: selectedInvestigationOutEntities.map(data => data.investigationOut.id),
        otherInitiative: selectedOtherInitiativeEntities.map(data => data.otherInitiative.id),

      }
    };
    return result;
  };

  async save(payload: ImportantEventsVuxDataDto): Promise<boolean> {
    try {
      const codeNumber = payload.codeNumber;

      await this.selectedChangeLiveService.deleteByCodeNumber(codeNumber);
      await this.selectedChangeOverService.deleteByCodeNumber(codeNumber);
      await this.selectedInvestigationOutService.deleteByCodeNumber(codeNumber);
      await this.selectedOtherInitiativeService.deleteByCodeNumber(codeNumber);

      for (const id of payload.formDataByEntityName["changeLive"]) {
        await this.selectedChangeLiveService.create({
          codeNumber,
          changeLive: await this.changeLiveService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["changeOver"]) {
        await this.selectedChangeOverService.create({
          codeNumber,
          changeOver: await this.changeOverService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["investigationOut"]) {
        await this.selectedInvestigationOutService.create({
          codeNumber,
          investigationOut: await this.investigationOutService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["otherInitiative"]) {
        await this.selectedOtherInitiativeService.create({
          codeNumber,
          otherInitiative: await this.otherInitiativeService.findOne({ where: { id: +id } })
        });
      }

      return true;
    }
    catch (e) {
      console.log("important events vux data create error: ", e);
      return false;
    }
  }
}
