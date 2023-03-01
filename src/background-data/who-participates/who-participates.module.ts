import { Module } from '@nestjs/common';
import { WhoParticipatesService } from './who-participates.service';
import { WhoParticipatesController } from './who-participates.controller';

@Module({
  controllers: [WhoParticipatesController],
  providers: [WhoParticipatesService]
})
export class WhoParticipatesModule {}
