import { Module } from '@nestjs/common';
import { OtherInterventionsService } from './other-interventions.service';
import { OtherInterventionsController } from './other-interventions.controller';

@Module({
  controllers: [OtherInterventionsController],
  providers: [OtherInterventionsService]
})
export class OtherInterventionsModule {}
