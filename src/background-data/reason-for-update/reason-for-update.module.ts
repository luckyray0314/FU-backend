import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReasonForUpdateEntity } from './entities/reason-for-update.entity';
import { ReasonForUpdateController } from './reason-for-update.controller';
import { ReasonForUpdateRepository } from './reason-for-update.repository';
import { ReasonForUpdateService } from './reason-for-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([ ReasonForUpdateEntity ])],
  providers: [ReasonForUpdateService, ReasonForUpdateRepository],
  controllers: [ReasonForUpdateController],
  exports: [ReasonForUpdateService, ReasonForUpdateRepository]
})
export class ReasonForUpdateModule {}
