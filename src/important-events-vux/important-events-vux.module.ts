import { Global, Module } from '@nestjs/common';
import { ImportantEventsVuxController } from './important-events-vux.controller';
import { ImportantEventsVuxService } from './important-events-vux.service';
import { ChangeLiveModule } from './change-live/change-live.module';
import { SelectedChangeLiveModule } from './change-live/selected-change-live.module';
import { ChangeOverModule } from './change-over/change-over.module';
import { SelectedChangeOverModule } from './change-over/selected-change-over.module';
import { InvestigationOutModule } from './investigation-out/investigation-out.module';
import { SelectedInvestigationOutModule } from './investigation-out/selected-investigation-out.module';
import { OtherInitiativeModule } from './other-initiative/other-initiative.module';
import { SelectedOtherInitiativeModule } from './other-initiative/selected-other-initiative.module';

Global();
@Module({
  imports: [
    ChangeLiveModule,
    ChangeOverModule,
    InvestigationOutModule,
    OtherInitiativeModule,
    SelectedChangeLiveModule,
    SelectedChangeOverModule,
    SelectedInvestigationOutModule,
    SelectedOtherInitiativeModule,
  ],
  providers: [ImportantEventsVuxService],
  controllers: [ImportantEventsVuxController],
})
export class ImportantEventsVuxModule {}
