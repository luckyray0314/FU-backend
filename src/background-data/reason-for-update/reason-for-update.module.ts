import { Module } from '@nestjs/common';
import { ReasonForUpdateService } from './reason-for-update.service';
import { ReasonForUpdateController } from './reason-for-update.controller';

@Module({
  controllers: [ReasonForUpdateController],
  providers: [ReasonForUpdateService]
})
export class ReasonForUpdateModule {}
